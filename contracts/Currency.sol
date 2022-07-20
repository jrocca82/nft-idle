// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Currency is IERC20, ERC20, Ownable {
    uint8 private immutable _decimals;

    event TokenEarned(uint256 amount, address account);

    constructor(
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) ERC20(name_, symbol_) {
        _decimals = decimals_;
    }

    //Mint when earn (after soup is made)
    function mint(address account, uint256 amount) external onlyOwner {
        emit TokenEarned(amount, account);
        
        _mint(account, amount);
    }
}