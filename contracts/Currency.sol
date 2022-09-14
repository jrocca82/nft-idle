// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./AuthController.sol";

contract Currency is IERC20, ERC20, AuthController {
    uint8 private immutable _decimals;

    event CurrencyEarned(address _to, uint256 _amount);

    constructor(string memory _name, string memory _symbol) 
                ERC20(_name, _symbol) AuthController()
                {
                    _decimals = 18;
                }

    //TODO: figure out how to limit access to this function-- onlyOwner?
    function mintCurrency(address _userAddress, uint256 _amount) public {
        emit CurrencyEarned(_userAddress, _amount);
        _mint(_userAddress, _amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}