// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./CatsAndSoup.sol";

contract Land is ERC721, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private tokenCounter;

    CatsAndSoup private catsAndSoup;

    struct LandStruct {
        string landType; //Types: Empty, Workable, Productive
        bool hasPot;
        address owner;
        uint256 catId;
        uint256 soupId;
    }

    mapping(uint256 => LandStruct) lands;

    address public marketplace;

    event PurchaseLand(uint256 landId, address account);

    constructor(
        string memory name_,
        string memory symbol_,
        CatsAndSoup catsAndSoup_
        ) ERC721(name_, symbol_) {
            catsAndSoup = catsAndSoup_;
    }

    modifier onlyMarketplace() {
        require(msg.sender == marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    //Modifiers to check owners of tokens
    modifier onlyLandOwner (uint256 landId) {
        require(lands[landId].owner == msg.sender, "You do not own this land and cannot modify it");
        _;
    }

    modifier onlyCatOwner (uint256 _catId) {
        require(catsAndSoup.balanceOf(msg.sender, _catId) > 0, "You do not own this cat");
        _;
    }

    modifier onlySoupOwner (uint256 _soupId) {
        require(catsAndSoup.balanceOf(msg.sender, _soupId) > 0, "You do not own this soup");
        _;
    }

    // Buy Land
    //Get next tokenId to mint
    function increasedTokenId() private returns (uint256) {
        tokenCounter.increment();
        return tokenCounter.current();
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        marketplace = _marketplace;
    }

    //Mint to caller
    function buyLand() external payable onlyMarketplace {
        uint256 landId = increasedTokenId();
        _safeMint(msg.sender, landId);

        //create new LandStruct and add to lands mapping
        LandStruct storage land = lands[landId];
        land.landType = "Empty";
        land.hasPot = false;
        land.owner = msg.sender;
        land.catId = 0;
        land.soupId = 0;

        emit PurchaseLand(landId, msg.sender);
    }

    //Assign pot to land
    function assignPot (uint256 landId) public onlyLandOwner(landId){
        require(lands[landId].hasPot == false, "This land already has a pot");
        lands[landId].hasPot == true;
        lands[landId].landType = "Workable";
    }

    //Remove pot from land
    function removePot (uint256 landId) public onlyLandOwner(landId){
        require(lands[landId].hasPot == true, "This land doesn't have a pot");
        lands[landId].hasPot == false;
        lands[landId].landType = "Empty";
    }

    //Assign cat to land
    function assignCat (uint256 _landId, uint _catId) public onlyLandOwner(_landId) onlyCatOwner(_catId){
        require(lands[_landId].catId == 0, "This land already has a cat");
        //Check if land also has soup
        if (lands[_landId].soupId > 0 && lands[_landId].hasPot == true){
            lands[_landId].landType = "Productive";
        }
        //Assign catId to land
        lands[_landId].catId = _catId;
    }

    //Add soup
    function assignSoup (uint256 _landId, uint _soupId) public onlyLandOwner(_landId) onlySoupOwner(_soupId){
        require(lands[_landId].soupId == 0, "Already making soup");
        require(lands[_landId].hasPot == true, "You don't have a pot to make soup in");
        //Check if land also has cat
        if (lands[_landId].catId > 0  && lands[_landId].hasPot == true){
            lands[_landId].landType = "Productive";
        }
        //Assign soupId to land
        lands[_landId].soupId = _soupId;
    }
}