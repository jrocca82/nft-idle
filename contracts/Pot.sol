// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Land.sol";

contract Pot is ERC20, Ownable {
    uint8 private immutable _decimals;

    Land private land;

    address public marketplace;

    event PurchasePot(uint256 landId, address account);
    event BurnPot(uint256 landId);

    modifier onlyMarketplace() {
        require(msg.sender == marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    constructor(
        string memory name_,
        string memory symbol_
    ) ERC20(name_, symbol_) {
        _decimals = 0;
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        marketplace = _marketplace;
    }

    //Mint pot directly onto land
    function buyPot(uint256 landId) external payable onlyMarketplace{
        _mint(msg.sender, 1);
        land.assignPot(landId);
        emit PurchasePot(landId, msg.sender);
    }

    //Remove pot from land
    function deletePot(uint256 landId) external {
        land.removePot(landId);
        emit BurnPot(landId);
    }
}