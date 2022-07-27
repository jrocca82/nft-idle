// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Currency is IERC20, ERC20, Ownable {
    uint8 private immutable _decimals;

    event CurrencyEarned(address _to, uint256 _amount);

    constructor(string memory _name, string memory _symbol) 
                ERC20(_name, _symbol) 
                {
                    _decimals = 18;
                }

    //TODO: figure out how to limit access to this function-- onlyOwner?
    function mintCurrency(uint256 _amount) public {
        emit CurrencyEarned(msg.sender, _amount);
        _mint(msg.sender, _amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}