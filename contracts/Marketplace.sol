// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
pragma abicoder v2;

import "./Land.sol";
import "./Pot.sol";
import "./CatsAndSoup.sol";
import "./Currency.sol";
import "./AuthController.sol";

contract Marketplace is AuthController {
    Pot public potContract;
    Land public landContract;
    Currency public currencyContract;
    CatsAndSoup public catsAndSoupContract;

    uint256 public landPrice = 1 ether;

    uint256 public potPrice = 0.1 ether;

    uint256 public catPrice = 0.5 ether;

    uint256 public soupPrice = 0.3 ether;

    uint256 public startPackPrice = 1 ether;

    event Purchase(string purchaseType, address purchaser, uint256 id);

    constructor(
        Pot _potContract,
        Land _landContract,
        Currency _currencyContract,
        CatsAndSoup _catsAndSoupContract
    ) AuthController() {
        landContract = _landContract;
        potContract = _potContract;
        currencyContract = _currencyContract;
        catsAndSoupContract = _catsAndSoupContract;
        landContract.setApprovalForAll(address(landContract), true);
        catsAndSoupContract.setApprovalForAll(address(catsAndSoupContract), true);
    }

    function setContractAuths() public {
        require(isAuthorized[msg.sender], "Unauthorized");
        AuthController.setAuth(address(potContract));
        AuthController.setAuth(address(landContract));
        AuthController.setAuth(address(currencyContract));
        AuthController.setAuth(address(catsAndSoupContract));
        AuthController.setAuth(address(this));
    }

    function buyPot(uint256 _landId) public payable {
        require(msg.value >= potPrice);
        require(
            landContract.balanceOf(msg.sender) >
                potContract.balanceOf(msg.sender),
            "You need to buy a land first"
        );

        emit Purchase("Pot", msg.sender, _landId);

        currencyContract.transferFrom(msg.sender, address(this), potPrice);
        potContract.mintPot(_landId, msg.sender);
    }

    function buyLand(uint256 _landId) public payable {
        require(msg.value >= landPrice, "Not enough currency");

        emit Purchase("Land", msg.sender, _landId);

        currencyContract.transferFrom(msg.sender, address(this), landPrice);
        landContract.buyLand(_landId, msg.sender);
    }

    function buyItem(uint256 _itemId) public payable {
        require(_itemId < 2, "This item does not exist");

        if (_itemId == 0) {
            require(msg.value >= catPrice);
            emit Purchase("Cat", msg.sender, _itemId);

            currencyContract.transferFrom(msg.sender, address(this), catPrice);
        } else {
            require(msg.value >= soupPrice);
            emit Purchase("Soup", msg.sender, _itemId);
            currencyContract.transferFrom(msg.sender, address(this), soupPrice);
        }

        catsAndSoupContract.mintItem(_itemId, msg.sender);
    }

    function buyStarterPack(uint256 _landId) public payable {
        AuthController.setUser(msg.sender);
        require(
            landContract.balanceOf(msg.sender) == 0,
            "You cannot purchase a starter pack"
        );
        require(msg.value >= startPackPrice, "Not enough currency");

        emit Purchase("Starter Pack", msg.sender, _landId);

        landContract.buyLand(_landId, msg.sender);
        potContract.mintPot(_landId, msg.sender);
        catsAndSoupContract.mintItem(0, msg.sender);
        catsAndSoupContract.mintItem(1, msg.sender);
    }
}
