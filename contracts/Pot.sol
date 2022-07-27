// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./MarketplaceAccess.sol";
import "./Land.sol";

contract Pot is ERC20, MarketplaceAccess {
    Land private landContract;
    uint8 private immutable _decimals;

    constructor(string memory _name, string memory _symbol, Land _landContract) 
                ERC20(_name, _symbol) 
                {
                    landContract = _landContract;
                    _decimals = 0;
                }

    function mintPot(uint256 _landId, address _userAddress) external onlyMarketplace {
        require(_userAddress != address(0), "Cannot mint pot to zero address");
        landContract.assignPot(_landId);
        _mint(_userAddress, 1);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}