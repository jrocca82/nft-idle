// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "./AuthController.sol";

contract CatsAndSoup is ERC1155, AuthController {
    //Item IDs
    uint256 public constant cat = 0;
    uint256 public constant soup = 1;

    constructor() ERC1155("") AuthController() {}

    function mintItem(uint256 _itemId, address _to) external {
        require(isAuthorized[msg.sender], "Unauthorized");
        require(_itemId >= 0 && _itemId <= 1, "Invalid item ID");
        _mint(_to, _itemId, 1, "");
    }
}
