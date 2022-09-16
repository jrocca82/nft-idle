// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

abstract contract AuthController {
    mapping(address => bool) internal isAuthorized;
    mapping(address => bool) internal isUser;

    constructor() {
        isAuthorized[msg.sender] = true;
    }

    function setAuth(address _address) internal {
        require(isAuthorized[msg.sender] == true, "Auth: Unauthorized");
        isAuthorized[_address] = true;
    }

    function getAuth(address _address) external view returns (bool) {
        return isAuthorized[_address];
    }

    function setUser(address _address) internal {
        isUser[_address] = true;
    }

    function getUser(address _address) external view returns (bool) {
        return isUser[_address];
    }
}
