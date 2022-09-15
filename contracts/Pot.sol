// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./AuthController.sol";
import "./Land.sol";

contract Pot is ERC20, AuthController {
    Land private landContract;
    uint8 constant _decimals = 0;

    constructor(string memory _name, string memory _symbol)
        ERC20(_name, _symbol)
        AuthController()
    {}

    function mintPot(uint256 _landId, address _userAddress) external {
        require(_userAddress != address(0), "Cannot mint pot to zero address");
        require(isAuthorized[msg.sender], "Unauthorized");
        landContract.assignPot(_landId);
        _mint(_userAddress, 1);
    }

    function decimals() public pure override returns (uint8) {
        return _decimals;
    }
}
