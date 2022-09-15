// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "./AuthController.sol";
import "./CatsAndSoup.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//Imports that need to be compiled for ERC721A
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Land is ERC721A, AuthController, Ownable {
    uint256 public maxSupply;

    struct LandStruct {
        string landType;
        address owner;
        uint256 positionX;
        uint256 positionY;
        uint256 sizeX;
        uint256 sizeY;
    }

    LandStruct[] public landsArray;

    //mapping from tokenId to LandStruct
    mapping(uint256 => LandStruct) public landData;

    CatsAndSoup private catsAndSoup;

    address public marketplace;
    
    //Encoded land types -- needed to compare strings
    bytes32 emptyLand = keccak256(abi.encodePacked("Empty"));
    bytes32 hasPot = keccak256(abi.encodePacked("hasPot"));
    bytes32 hasSoup = keccak256(abi.encodePacked("hasSoup"));
    bytes32 hasCat = keccak256(abi.encodePacked("hasCat"));
    bytes32 productive = keccak256(abi.encodePacked("Productive"));

    event InitialMint(uint256 quantity, address initialOwner);

    constructor(
        string memory name,
        string memory symbol,
        uint256 _maxSupply
    ) ERC721A(name, symbol) AuthController() {
        maxSupply = _maxSupply;
        setAuth(msg.sender);
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        require(
            _marketplace != address(0),
            "Cannot set marketplace to 0 address"
        );
        marketplace = _marketplace;
        setAuth(marketplace);
    }

    function getOwner(uint256 _landId) public view returns (address) {
        return landData[_landId].owner;
    }

    function initialBatchMint() public {
        require(isAuthorized[msg.sender], "Land Contract: Unauthorized");
        for (uint256 i = 0; i < maxSupply; i++) {
            LandStruct storage _newLand = landData[i];
            _newLand.landType = "Empty";
            _newLand.owner = marketplace;

            //TODO: Create formula for positions
            _newLand.positionX = 0;
            _newLand.positionY = 0;

            _newLand.sizeX = 10;
            _newLand.sizeY = 10;

            //Push each new struct into array
            landsArray.push(_newLand);
        }

        emit InitialMint(maxSupply, marketplace);

        _mint(marketplace, maxSupply);
    }

    function buyLand(uint256 _landId, address _userAddress) external payable {
        require(_landId < maxSupply, "This land does not exist");
        require(
            landData[_landId].owner == marketplace,
            "This land has already been bought"
        );
        require(isAuthorized[msg.sender], "Land Contract: Unauthorized");

        landData[_landId].owner = _userAddress;

        this.safeTransferFrom(marketplace, _userAddress, _landId);
    }

    function assignPot(uint256 _landId, address _user) public {
        require(landData[_landId].owner == _user, "You do not own this land");
        bytes32 typeOfLand = keccak256(
            abi.encodePacked(landData[_landId].landType)
        );

        require(typeOfLand == emptyLand, "This land already has a pot");

        landData[_landId].landType = "hasPot";
    }

    function assignItem(uint256 _landId, uint256 _itemId) public {
        require(
            landData[_landId].owner == msg.sender,
            "You do not own this land"
        );
        require(isAuthorized[msg.sender] || isUser[msg.sender], "Land Contract: Unauthorized");
        //TODO: figure out how to prevent one cat from being assigned to multiple lands
        require(
            catsAndSoup.balanceOf(msg.sender, _itemId) >= 1,
            "You do not have any of this item type"
        );
        bytes32 typeOfLand = keccak256(
            abi.encodePacked(landData[_landId].landType)
        );
        require(typeOfLand != emptyLand, "Please place a pot first");
        require(typeOfLand != productive, "This land is full");
        require(_itemId < 2, "This item does not exist");
        if (_itemId == 0) {
            require(typeOfLand != hasCat, "This land already has a cat");
        }

        if (_itemId == 1) {
            require(typeOfLand != hasSoup, "This land already has soup");
        }

        if (typeOfLand == hasPot && _itemId == 0) {
            landData[_landId].landType = "hasCat";
        } else if (typeOfLand == hasPot && _itemId == 1) {
            landData[_landId].landType = "hasSoup";
        } else {
            landData[_landId].landType = "Productive";
        }
    }
}
