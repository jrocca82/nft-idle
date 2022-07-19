// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma abicoder v2;

import "./Land.sol";
import "./Pot.sol";
import "./CatsAndSoup.sol";
import "./Currency.sol";

contract Marketplace {
    Land private _landContract;
    Pot private _potContract;
    CatsAndSoup private _catsAndSoupContract;
    Currency private _currency;

    //TODO: Change prices to readable numbers with ethers.utils
    uint256 landPrice = 50000000000000;
    uint potPrice = 10000000000000;

    //Map item ID to price
    mapping(uint => uint) itemPrice;

    constructor(Land landContract, Pot potContract, CatsAndSoup catsAndSoupContract, Currency currency) {
        require(address(landContract) != address(0));
        require(address(potContract) != address(0));
        require(address(catsAndSoupContract) != address(0));
        require(address(currency) != address(0));
        _landContract = landContract;
        _potContract = potContract;
        _catsAndSoupContract = catsAndSoupContract;
        _currency = currency;

        //Soup prices
         //TODO: Change prices to readable numbers with ethers.utils
        itemPrice[0] = 100000000000000; //Bland
        // price[1] = 200000000000000; //Tomato
        // price[2] = 300000000000000; //Broccoli cheddar

        //Cat prices
        itemPrice[3] = 100000000000000; //Tabby
        // price[4] = 200000000000000; //Persian
        // price[5] = 300000000000000; //Sphinx
    }

    function buyLandToken() public payable {
        //TODO: Change to currency
        uint sentAmount = msg.value;
        require(sentAmount >= landPrice, "Not enough funds");
        require(landPrice != 0, "This item is not available");
        require(_landContract.balanceOf(msg.sender) < 10, "You have the maximum number of lands");

        _landContract.buyLand();
    }

    function buyPotToken(uint _landId) public payable {
        //TODO: Change to currency
        uint sentAmount = msg.value;
        require(sentAmount >= potPrice, "Not enough funds");
        require(potPrice != 0, "This item is not available");
        require(_potContract.balanceOf(msg.sender) < _landContract.balanceOf(msg.sender), "You do not have enough land to buy another pot");

        _potContract.buyPot(_landId);
    }

    function buyItem(uint _itemId) public payable {
        //TODO: Change to currency
        uint sentAmount = msg.value;
        require(sentAmount >= itemPrice[_itemId], "Not enough funds");
        require(itemPrice[_itemId] != 0, "This item is not available");

        _catsAndSoupContract.mint(_itemId, msg.sender);
    }
}