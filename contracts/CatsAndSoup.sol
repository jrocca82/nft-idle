// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Pot.sol";
import "./Land.sol";

contract CatsAndSoup is ERC1155, Ownable {
    uint256 public constant cat = 0;
    uint256 public constant soup = 1;

    address public _marketplace;

    event MarketplaceSet(address marketplace);

    modifier onlyMarketplace() {
        require(msg.sender == _marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    constructor() ERC1155("") {
    }

    function setMarketplace(address marketplace) external onlyOwner {
        require(marketplace != address(0), "Cannot assign marketplace to zero address");
        _marketplace = marketplace;
        emit MarketplaceSet(_marketplace);
    }

    function mintItem(uint _itemId, address _to) external onlyMarketplace {
        require(_itemId >= 0 && _itemId <= 1, "Invalid item ID");
        _mint(_to, _itemId, 1, "");
    }
}