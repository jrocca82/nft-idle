// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Pot.sol";
import "./Land.sol";

contract CatsAndSoup is ERC1155, Ownable {
    Pot private pot;
    uint256 public constant blandSoup = 1;
    // uint256 public constant tomatoSoup = 2;
    // uint256 public constant broccoliCheddarSoup = 3;
    uint256 public constant tabbyCat = 4;
    // uint256 public constant persianCat = 5;
    // uint256 public constant sphinxCat = 6;
    address public marketplace;

    event PurchasedItem(uint256 itemId, address account, string itemType);

    modifier onlyMarketplace() {
        require(msg.sender == marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    constructor() ERC1155("") {
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        marketplace = _marketplace;
    }

    function mint(uint _itemId, address _to) external onlyMarketplace {
        require(_itemId > 0 && _itemId <= 6, "Invalid item ID");
        //If soup, check for pot
        if(_itemId <= 2){
            require(pot.balanceOf(msg.sender) > 0, "You do not have any pots to make soup in!");
        }
        _mint(_to, _itemId, 1, "");

        if(_itemId <= 2) {
            emit PurchasedItem(_itemId, _to, "soup");
        } else {
            emit PurchasedItem(_itemId, _to, "cat");
        }
    }
}