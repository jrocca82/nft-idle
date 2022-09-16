// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./AuthController.sol";
import "./Land.sol";

contract Pot is ERC20, AuthController, Ownable {
    Land public landContract;
    uint8 constant _decimals = 0;
    address public marketplace;

    constructor(string memory _name, string memory _symbol, Land _landContract)
        ERC20(_name, _symbol)
        AuthController()
    {
        landContract = _landContract;
        setAuth(msg.sender);
    }

    function setMarketplace(address _marketplace) public onlyOwner {
        require(
            _marketplace != address(0),
            "Cannot set marketplace to 0 address"
        );
        marketplace = _marketplace;
        setAuth(marketplace);
    }

    function mintPot(uint256 _landId, address _userAddress) external {
        require(_userAddress != address(0), "Cannot mint pot to zero address");
        require(isAuthorized[msg.sender], "Pot Contract: Unauthorized");
        _mint(_userAddress, 1);
        landContract.assignPot(_landId, _userAddress);
    }

    function decimals() public pure override returns (uint8) {
        return _decimals;
    }
}
