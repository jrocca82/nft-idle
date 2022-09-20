// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./Currency.sol";
import "./Land.sol";
import "./Marketplace.sol";
import "./AuthController.sol";

/// @dev Vault contract for app user to deposit and withdraw tokens
contract Vault is Ownable, AuthController {
    using SafeMath for uint256;

  struct VaultStruct {
        address owner;
        uint256 lastClaimTime;
        uint256 balance;
    }

    Currency public currency;
    Land public land;
    Marketplace public marketplace;

    //Map from landId to vault struct
    mapping(uint256 => VaultStruct) public landDetails;

    constructor(Land _land) {
        land = _land;
    }

    function setCurrency(Currency _currencyAddress) public onlyOwner {
        require(
            address(_currencyAddress) != address(0),
            "Cannot set address to 0"
        );
        currency = _currencyAddress;
    }

    function setMarketplace(Marketplace _marketplace) public onlyOwner {
        require(
            address(_marketplace) != address(0),
            "Cannot set address to 0"
        );
        marketplace = _marketplace;
    }

    function setOwnerAndStartEarn(uint256 _landId, address _userAddress) public {
        require(msg.sender == address(land), "Vault: Unauthorized");
        landDetails[_landId].owner = _userAddress;
        resetLand(_landId);
    }

    function resetLand(uint256 _landId) internal {
        landDetails[_landId].lastClaimTime = block.timestamp;
        landDetails[_landId].balance = 0;
    }

    function claim(uint256 _landId) external {
        require(
            msg.sender == land.getOwner(_landId),
            "You cannot claim for someone else"
        );

        bytes32 typeOfLand = keccak256(
            abi.encodePacked(land.getLandType(_landId))
        );
        bytes32 productiveLand = keccak256(abi.encodePacked("Productive"));

        require(typeOfLand == productiveLand, "This land is not producing");

        uint256 amount = landDetails[_landId].balance;
        require(amount > 0, "No tokens to claim!");

        //Reset last claim time to current time
        resetLand(_landId);

        currency.mintCurrency(msg.sender, amount);
    }

    function setBalance(uint256 _landId) public {
        uint256 lastClaimTime = landDetails[_landId].lastClaimTime;
        uint256 secondsSinceLastClaim = block.timestamp - lastClaimTime;
        uint256 minutesSinceClaim = secondsSinceLastClaim / 60;
        uint256 amount = minutesSinceClaim * 10**currency.decimals();
        landDetails[_landId].balance = amount;
    }

    function getBalance(uint256 _landId) public view returns (uint256) {
        return landDetails[_landId].balance;
    }
}
