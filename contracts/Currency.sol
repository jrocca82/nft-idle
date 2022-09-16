// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Currency is IERC20, ERC20 {
    uint8 private immutable _decimals;

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
    {
        _decimals = 18;
    }

    function mintCurrency(address _userAddress, uint256 _amount) public {
        _mint(_userAddress, _amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
