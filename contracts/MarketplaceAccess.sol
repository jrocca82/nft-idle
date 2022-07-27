// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma abicoder v2;

import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MarketplaceAccess is Context, Ownable {
    address public _marketplace;

    event MarketplaceSet(address marketplace);

    modifier onlyMarketplace() {
        require(msg.sender == _marketplace, "Unauthorized. Marketplace only.");
        _;
    }

    function setMarketplace(address marketplace) external onlyOwner {
        require(marketplace != address(0), "Cannot assign marketplace to zero address");
        _marketplace = marketplace;
        emit MarketplaceSet(_marketplace);
    }

}