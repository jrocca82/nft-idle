// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./AuthController.sol";
import "./Vault.sol";

contract Currency is IERC20, ERC20, AuthController {
    uint8 private immutable _decimals;
    Vault public vault;


    constructor(string memory _name, string memory _symbol, Vault _vault)
        ERC20(_name, _symbol)
        AuthController()
    {
        vault = _vault;
        AuthController.setAuth(address(vault));
        _decimals = 18;
    }

    function mintCurrency(address _userAddress, uint256 _amount) public {
        require(AuthController.isAuthorized[msg.sender], "Currency: Unauthorized");
        _mint(_userAddress, _amount);
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }
}
