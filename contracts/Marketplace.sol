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

    uint256 public soupPrice = 0.5 ether;

    uint256 public startPackPrice = 1.5 ether;

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
        AuthController.setAuth(msg.sender);
        landContract.setApprovalForAll(address(landContract), true);
        catsAndSoupContract.setApprovalForAll(address(catsAndSoupContract), true);
    }

    function setContractAuths() public {
        require(AuthController.isAuthorized[msg.sender], "Marketplace: Unauthorized");
        AuthController.setAuth(address(this));
        AuthController.setAuth(address(potContract));
        AuthController.setAuth(address(landContract));
        AuthController.setAuth(address(currencyContract));
        AuthController.setAuth(address(catsAndSoupContract));
    }

    function buyPot(uint256 _landId) public payable {
        require(msg.value >= potPrice, "Not enough currency sent");

        emit Purchase("Pot", msg.sender, _landId);

        currencyContract.transferFrom(msg.sender, address(this), potPrice);

        potContract.mintPot(_landId, msg.sender);
    }

    function buyLand(uint256 _landId) public payable {
        require(msg.value >= landPrice, "Not enough currency sent");

        currencyContract.transferFrom(msg.sender, address(this), landPrice);

        emit Purchase("Land", msg.sender, _landId);

        landContract.buyLand(_landId, msg.sender);
    }

    function buyItem(uint256 _itemId) public payable {
        require(_itemId < 2, "This item does not exist");

        if (_itemId == 0) {
            require(msg.value >= catPrice, "Not enough currency sent");
            currencyContract.transferFrom(msg.sender, address(this), catPrice);
            emit Purchase("Cat", msg.sender, _itemId);
        } else {
            require(msg.value >= soupPrice, "Not enough currency sent");
            currencyContract.transferFrom(msg.sender, address(this), soupPrice);
            emit Purchase("Soup", msg.sender, _itemId);
        }

        catsAndSoupContract.mintItem(_itemId, msg.sender);
    }

    function buyStarterPack(uint256 _landId) public payable {
        require(msg.value >= startPackPrice, "Not enough currency sent");
        AuthController.setUser(msg.sender);
        require(
            landContract.balanceOf(msg.sender) == 0,
            "You cannot purchase a starter pack"
        );

        currencyContract.transferFrom(msg.sender, address(this), startPackPrice);

        emit Purchase("Starter Pack", msg.sender, _landId);

        landContract.buyLand(_landId, msg.sender);
        potContract.mintPot(_landId, msg.sender);
        catsAndSoupContract.mintItem(0, msg.sender);
        catsAndSoupContract.mintItem(1, msg.sender);
    }
}
