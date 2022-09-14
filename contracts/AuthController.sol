// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

abstract contract AuthController {
    mapping(address => bool) internal isAuthorized;

    constructor() {
        isAuthorized[msg.sender] = true;
    }

    function setAuth(address _address) external {
        require(isAuthorized[msg.sender] == true);
        isAuthorized[_address] = true;
    }

    function getAuth(address _address) external view returns(bool) {
        return isAuthorized[_address];
    }
}