// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Pot.sol";
import "./Land.sol";
import "./MarketplaceAccess.sol";

contract CatsAndSoup is ERC1155, Ownable, MarketplaceAccess {
    uint256 public constant cat = 0;
    uint256 public constant soup = 1;

    constructor() ERC1155("") {
    }

    function mintItem(uint _itemId, address _to) external onlyMarketplace {
        require(_itemId >= 0 && _itemId <= 1, "Invalid item ID");
        _mint(_to, _itemId, 1, "");
    }
}