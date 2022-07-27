// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./CatsAndSoup.sol";
import "./MarketplaceAccess.sol";

contract Land is ERC721A, Ownable, MarketplaceAccess {
    uint256 public maxSupply;

    uint256 public boughtLand = 0;

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

    event InitialMint(uint256 quantity, address initialOwner);

    constructor(string memory name, string memory symbol, uint256 _maxSupply, CatsAndSoup _catsAndSoup) 
        ERC721A(name, symbol)
    {
        maxSupply = _maxSupply;
        catsAndSoup = _catsAndSoup;
    }

    function initialBatchMint() public onlyOwner {
        require(_marketplace != address(0), "Marketplace address has not been set");
        for (uint256 i = 0; i <= maxSupply; i++) {
            LandStruct storage _newLand = landData[i];
            _newLand.landType = "Empty";
            _newLand.owner = MarketplaceAccess._marketplace;

            //TODO: Create formula for positions
            _newLand.positionX = 0;
            _newLand.positionY = 0;

            _newLand.sizeX = 10;
            _newLand.sizeY = 10;

            //Push each new struct into array
            landsArray.push(_newLand);

        }
        
        emit InitialMint(maxSupply, MarketplaceAccess._marketplace);

        _mint(MarketplaceAccess._marketplace, maxSupply);
    }

    function buyLand(uint256 _landId, address _userAddress) external onlyMarketplace {
        require(boughtLand <= maxSupply, "No more land to buy");
        require(_landId <= maxSupply, "This land does not exist");
        require(landData[_landId].owner == MarketplaceAccess._marketplace, "This land has already been bought");

        landData[_landId].owner = _userAddress;
        boughtLand++;

        safeTransferFrom(MarketplaceAccess._marketplace, _userAddress, _landId);
    }

    function assignPot(uint256 _landId) public {
        require(landData[_landId].owner == msg.sender, "You do not own this land");
        bytes32 typeOfLand = keccak256(abi.encodePacked(landData[_landId].landType));
        require(typeOfLand == "Empty", "This land already has a pot");
        landData[_landId].landType = "hasPot";
    }

    function assignItem(uint256 _landId, uint256 _itemId) public {
        require(landData[_landId].owner == msg.sender, "You do not own this land");
        //TODO: figure out how to prevent one cat from being assigned to multiple lands
        require(catsAndSoup.balanceOf(msg.sender, _itemId) >= 1, "You do not have any of this item type");
        bytes32 typeOfLand = keccak256(abi.encodePacked(landData[_landId].landType));
        require(typeOfLand != "Empty", "Please place a pot first");
        require(typeOfLand != "Productive", "This land is full");
        require(_itemId < 2, "This item does not exist");
        if (_itemId == 0) {
            require(typeOfLand != "hasCat", "This land already has a cat");
        }

        if(_itemId == 1) {
            require(typeOfLand != "hasSoup", "This land already has soup");
        }

        if(typeOfLand == "hasPot" && _itemId == 0) {
            landData[_landId].landType = "hasCat";
        } else if (typeOfLand == "hasPot" && _itemId == 1) {
            landData[_landId].landType = "hasSoup";
        } else {
            landData[_landId].landType = "Productive";
        }
    }

}