// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./AuthController.sol";

contract CatsAndSoup is ERC1155, AuthController, Ownable {
    //Item IDs
    uint256 public constant cat = 0;
    uint256 public constant soup = 1;
    address public marketplace;

    constructor() ERC1155("") AuthController() {
        setAuth(msg.sender);
    }
        
    function setMarketplace(address _marketplace) public onlyOwner {
        require(
            _marketplace != address(0),
            "Cannot set marketplace to 0 address"
        );
        marketplace = _marketplace;
        AuthController.setAuth(marketplace);
    }

    function mintItem(uint256 _itemId, address _to) external {
        require(AuthController.isAuthorized[msg.sender], "Cats and Soup: Unauthorized");
        require(_itemId >= 0 && _itemId <= 1, "Invalid item ID");
        _mint(_to, _itemId, 1, "");
    }
}
