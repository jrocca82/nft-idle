/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Pot, PotInterface } from "../Pot";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "contract Land",
        name: "_landContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getAuth",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "landContract",
    outputs: [
      {
        internalType: "contract Land",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "marketplace",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_landId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "mintPot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
    ],
    name: "setMarketplace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200310a3803806200310a8339818101604052810190620000379190620008d7565b828281600390805190602001906200005192919062000611565b5080600490805190602001906200006a92919062000611565b505050620000a17f776df80b34dad5aa3c12022d57ef2c0a05c76502d1a25cd84cc102764cb0121760001b620002e060201b60201c565b620000d57f275fbfd75edbcc09776478c5047eab1ea6d98072ba70e1203692e268e2e4e08860001b620002e060201b60201c565b620001097f34ec4438805d3a4f87f0f0de3f02ac78b1c5d47005023d8a2eebd7758a73e5e860001b620002e060201b60201c565b6001600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506200018162000175620002e360201b60201c565b620002eb60201b60201c565b620001b57f2fc2f04fafb37658022336b4a2c9457c752a87b5f84fc50ab45753d6d2bea8f360001b620003b160201b60201c565b620001e97f37c6b20e4cae7a8aff79f400d5021b414070ffb25f5d17c6de18477f13f15ac560001b620003b160201b60201c565b6200021d7f9315d1e9356d872ed83b76ff235e1d4e444a6dc712ac71232489a19a8cfc0a6260001b620003b160201b60201c565b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620002927f5338c9ea71bad2bf9d2ad0de8380d326d2c0c6721a05ef0db55b90410eb25afd60001b620003b160201b60201c565b620002c67fc4c1fb2d17ac0e3932354da19c64125a4845abfd030c2a93f2c49e4a36286e7960001b620003b160201b60201c565b620002d733620003b460201b60201c565b50505062000a58565b50565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b50565b620003e87f8869cc9c8bac26f6dc2d68dffc0903f82a21c4501d1f6690658064550f5d53ad60001b620002e060201b60201c565b6200041c7f35230ef97436201a1a46f27d383f1d4031e95e2f3db5a2bf7f37eb9250eaace860001b620002e060201b60201c565b620004507f8506f9ef2b1f30228515d53075bd2a429eef4c320be5717f0c663ef29063059460001b620002e060201b60201c565b620004847fe23b751a1e97c158621606ffd4c99de3a2ebb7eb2e77e7fa2bbd7c39d1cb3ba860001b620002e060201b60201c565b60011515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515146200051a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200051190620009d2565b60405180910390fd5b6200054e7fc31acca0a4ee5a45460f2f0eb74bfc4efb75c9eb49bdcde1f143f1a1c9f96a1260001b620002e060201b60201c565b620005827fb48be8c36bdd84e2854559998393893188a126d846aec6c9d7cebd72e5b34a4460001b620002e060201b60201c565b620005b67fd59f0da4f51627d6e46f19b193739abb0d5e413417d786670c992ebb0dfe62e160001b620002e060201b60201c565b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b8280546200061f9062000a23565b90600052602060002090601f0160209004810192826200064357600085556200068f565b82601f106200065e57805160ff19168380011785556200068f565b828001600101855582156200068f579182015b828111156200068e57825182559160200191906001019062000671565b5b5090506200069e9190620006a2565b5090565b5b80821115620006bd576000816000905550600101620006a3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200072a82620006df565b810181811067ffffffffffffffff821117156200074c576200074b620006f0565b5b80604052505050565b600062000761620006c1565b90506200076f82826200071f565b919050565b600067ffffffffffffffff821115620007925762000791620006f0565b5b6200079d82620006df565b9050602081019050919050565b60005b83811015620007ca578082015181840152602081019050620007ad565b83811115620007da576000848401525b50505050565b6000620007f7620007f18462000774565b62000755565b905082815260208101848484011115620008165762000815620006da565b5b62000823848285620007aa565b509392505050565b600082601f830112620008435762000842620006d5565b5b815162000855848260208601620007e0565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200088b826200085e565b9050919050565b60006200089f826200087e565b9050919050565b620008b18162000892565b8114620008bd57600080fd5b50565b600081519050620008d181620008a6565b92915050565b600080600060608486031215620008f357620008f2620006cb565b5b600084015167ffffffffffffffff811115620009145762000913620006d0565b5b62000922868287016200082b565b935050602084015167ffffffffffffffff811115620009465762000945620006d0565b5b62000954868287016200082b565b92505060406200096786828701620008c0565b9150509250925092565b600082825260208201905092915050565b7f417574683a20556e617574686f72697a65640000000000000000000000000000600082015250565b6000620009ba60128362000971565b9150620009c78262000982565b602082019050919050565b60006020820190508181036000830152620009ed81620009ab565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168062000a3c57607f821691505b60208210810362000a525762000a51620009f4565b5b50919050565b6126a28062000a686000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063a9059cbb11610071578063a9059cbb1461035b578063abc8c7af1461038b578063b796340b146103a9578063dd62ed3e146103c5578063f2fde38b146103f55761012c565b8063715018a6146102c957806373ad6c2d146102d35780638da5cb5b146102ef57806395d89b411461030d578063a457c2d71461032b5761012c565b8063313ce567116100f4578063313ce567146101eb57806339509351146102095780636e4e3e2d146102395780636f77926b1461026957806370a08231146102995761012c565b806303d073401461013157806306fdde031461014f578063095ea7b31461016d57806318160ddd1461019d57806323b872dd146101bb575b600080fd5b610139610411565b6040516101469190611af6565b60405180910390f35b610157610437565b6040516101649190611baa565b60405180910390f35b61018760048036038101906101829190611c45565b6104c9565b6040516101949190611ca0565b60405180910390f35b6101a56104ec565b6040516101b29190611cca565b60405180910390f35b6101d560048036038101906101d09190611ce5565b6104f6565b6040516101e29190611ca0565b60405180910390f35b6101f3610525565b6040516102009190611d54565b60405180910390f35b610223600480360381019061021e9190611c45565b6105b2565b6040516102309190611ca0565b60405180910390f35b610253600480360381019061024e9190611d6f565b6105e9565b6040516102609190611ca0565b60405180910390f35b610283600480360381019061027e9190611d6f565b6106c3565b6040516102909190611ca0565b60405180910390f35b6102b360048036038101906102ae9190611d6f565b61079d565b6040516102c09190611cca565b60405180910390f35b6102d16107e5565b005b6102ed60048036038101906102e89190611d6f565b6107f9565b005b6102f7610a6b565b6040516103049190611dab565b60405180910390f35b610315610a95565b6040516103229190611baa565b60405180910390f35b61034560048036038101906103409190611c45565b610b27565b6040516103529190611ca0565b60405180910390f35b61037560048036038101906103709190611c45565b610b9e565b6040516103829190611ca0565b60405180910390f35b610393610bc1565b6040516103a09190611dab565b60405180910390f35b6103c360048036038101906103be9190611dc6565b610be7565b005b6103df60048036038101906103da9190611e06565b610fbc565b6040516103ec9190611cca565b60405180910390f35b61040f600480360381019061040a9190611d6f565b611043565b005b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60606003805461044690611e75565b80601f016020809104026020016040519081016040528092919081815260200182805461047290611e75565b80156104bf5780601f10610494576101008083540402835291602001916104bf565b820191906000526020600020905b8154815290600101906020018083116104a257829003601f168201915b5050505050905090565b6000806104d46110c6565b90506104e18185856110ce565b600191505092915050565b6000600254905090565b6000806105016110c6565b905061050e858285611297565b610519858585611323565b60019150509392505050565b60006105537f316813531953a39f7debf3f24df8a9a77f53a895c623cad33392447b56e0391760001b6115a2565b61057f7fac04688a5be38eab5262e9e3794ecaae7e64adfab809a617b573e73967a328b660001b6115a2565b6105ab7f157c671a135e49cb6a375545c1cb97ec3ee2d7ce78a888e642dcfb333a56619460001b6115a2565b6000905090565b6000806105bd6110c6565b90506105de8185856105cf8589610fbc565b6105d99190611ed5565b6110ce565b600191505092915050565b60006106177fb8236e4c7fe041eb23f560529089ddbec8904da9a9c02ca95e6279d6f829374b60001b6115a5565b6106437f22e6332909ce471bec69b09d65ed79310df9fd7d21d3d8a6863b13cdf560b05160001b6115a5565b61066f7fe24aa5d9e82afbd85dec09a2d83c63f9359c12e50ce21cd0578d00899968ed8960001b6115a5565b600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60006106f17fc85f0069556ba0b6c438ef7a6358db0a89787bdb6a45200d26e011dd51a72a7160001b6115a5565b61071d7fd98d20892d48771b892cdcba0252cce07c59820a95d02fd2f3b61ad60cf513c160001b6115a5565b6107497f80891e4390b5eda72ce9884e8371f86163abe3ab8c0983eedd0727fa4bfc0f5160001b6115a5565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107ed6115a8565b6107f76000611626565b565b6108016115a8565b61082d7f843908ef977d0c893b0e57ef0e15288b23d9c9594a8f35c1a8c86f1e3447052c60001b6115a2565b6108597fb388058c5c89cb348acf683db83e7c8b92c75894116d89580176bbffc3d806d460001b6115a2565b6108857f7bb9d38f0c789988d5ea76713ff27290f4770f7bfdcd817f01b00cae839d972e60001b6115a2565b6108b17f5d0fb8efb54bea27c8a7ea97eb4cc46a55d05c4cdbab321e83197e60b0afaf3c60001b6115a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610920576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091790611f9d565b60405180910390fd5b61094c7fb479da26acee4a2183e23923ec6b6a918c11e0b9bf7ddd07eb58f02ed3af4f2c60001b6115a2565b6109787f9eb9e46b7701e4154a25cb3fdace0fee0442a96d453854b14e98747b66bdec6c60001b6115a2565b6109a47fc13c15a2fc2f98178ee0af300c3fe7dd0fe4594129b05e4522b60e1099b9536b60001b6115a2565b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a117f3af4577ffc2aca0ef9ab6f7aaa63410a241844827d1ed46b6899534e34dfae8660001b6115a2565b610a3d7f462a8194c1b8117ee5c418f913e924d7f84b17401dbbcd9062ba3271a44a14b760001b6115a2565b610a68600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166116ec565b50565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060048054610aa490611e75565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad090611e75565b8015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b5050505050905090565b600080610b326110c6565b90506000610b408286610fbc565b905083811015610b85576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b7c9061202f565b60405180910390fd5b610b9282868684036110ce565b60019250505092915050565b600080610ba96110c6565b9050610bb6818585611323565b600191505092915050565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610c137fedda609a086317b4b5c0e0ce38e27cfb5976bc1b5ddc17f52031809efdb3224e60001b6115a2565b610c3f7f0775533fd06fbcc615813b3abbd5788239c9b03dcdcb9db1a3cab8187444c65960001b6115a2565b610c6b7f4d42610fd7651a1eb25c62eb98f53f90d999c8be4aee00479ca4584892ad9ef960001b6115a2565b610c977f53c08116e421c412d0a64708ae9a17ab0842d4f353addd0986ea1ceb48c6910160001b6115a2565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610d06576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfd9061209b565b60405180910390fd5b610d327faf25d24887fa470d0fb0b9142acd44f8d990fa9f4acf9efd7d44c76ae041df1260001b6115a2565b610d5e7fecc5d3b82e2a801a8e36c8f044c77ec9be9f8673ce062753c1019d51795fdf0760001b6115a2565b610d8a7f46b3325ed80b83a401bf718fba3bf5893dc3367f614e95712790627728e0c6c960001b6115a2565b610db67f31b6d5ca255e7a26e533916683a80a55232c5247a8ca66ca162e15b7f706f79560001b6115a2565b600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16610e42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3990612107565b60405180910390fd5b610e6e7f6d0babc74688f935652e67fc1a1b035196bb803707b8d5959fc7e9f4f0317ae160001b6115a2565b610e9a7f7f67d7d1c53ed80f57ccb99be84f4826722b5232ef6fafc711168f5c68a8a0e860001b6115a2565b610ec67fe3705674a78166f68b1e7ae2c93a017e9d163bf02f21945d58948901cd964ebe60001b6115a2565b610ed181600161190e565b610efd7f04ce76d2c55b0e2a294c240bcb869c29a0bf51891555e1600dd81b6802b4f0ce60001b6115a2565b610f297f976ebce44d8a838795b1a4fee65f36a9fa65a873521c6b9ac32e5d47ac5a697b60001b6115a2565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663696b5c3f83836040518363ffffffff1660e01b8152600401610f86929190612127565b600060405180830381600087803b158015610fa057600080fd5b505af1158015610fb4573d6000803e3d6000fd5b505050505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61104b6115a8565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b1906121c2565b60405180910390fd5b6110c381611626565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361113d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113490612254565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111ac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111a3906122e6565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161128a9190611cca565b60405180910390a3505050565b60006112a38484610fbc565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461131d578181101561130f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130690612352565b60405180910390fd5b61131c84848484036110ce565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611392576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611389906123e4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611401576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113f890612476565b60405180910390fd5b61140c838383611a6d565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611492576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161148990612508565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115259190611ed5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516115899190611cca565b60405180910390a361159c848484611a72565b50505050565b50565b50565b6115b06110c6565b73ffffffffffffffffffffffffffffffffffffffff166115ce610a6b565b73ffffffffffffffffffffffffffffffffffffffff1614611624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161161b90612574565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6117187f8869cc9c8bac26f6dc2d68dffc0903f82a21c4501d1f6690658064550f5d53ad60001b6115a5565b6117447f35230ef97436201a1a46f27d383f1d4031e95e2f3db5a2bf7f37eb9250eaace860001b6115a5565b6117707f8506f9ef2b1f30228515d53075bd2a429eef4c320be5717f0c663ef29063059460001b6115a5565b61179c7fe23b751a1e97c158621606ffd4c99de3a2ebb7eb2e77e7fa2bbd7c39d1cb3ba860001b6115a5565b60011515600560003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461182f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611826906125e0565b60405180910390fd5b61185b7fc31acca0a4ee5a45460f2f0eb74bfc4efb75c9eb49bdcde1f143f1a1c9f96a1260001b6115a5565b6118877fb48be8c36bdd84e2854559998393893188a126d846aec6c9d7cebd72e5b34a4460001b6115a5565b6118b37fd59f0da4f51627d6e46f19b193739abb0d5e413417d786670c992ebb0dfe62e160001b6115a5565b6001600560008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361197d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119749061264c565b60405180910390fd5b61198960008383611a6d565b806002600082825461199b9190611ed5565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546119f09190611ed5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611a559190611cca565b60405180910390a3611a6960008383611a72565b5050565b505050565b505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611abc611ab7611ab284611a77565b611a97565b611a77565b9050919050565b6000611ace82611aa1565b9050919050565b6000611ae082611ac3565b9050919050565b611af081611ad5565b82525050565b6000602082019050611b0b6000830184611ae7565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611b4b578082015181840152602081019050611b30565b83811115611b5a576000848401525b50505050565b6000601f19601f8301169050919050565b6000611b7c82611b11565b611b868185611b1c565b9350611b96818560208601611b2d565b611b9f81611b60565b840191505092915050565b60006020820190508181036000830152611bc48184611b71565b905092915050565b600080fd5b6000611bdc82611a77565b9050919050565b611bec81611bd1565b8114611bf757600080fd5b50565b600081359050611c0981611be3565b92915050565b6000819050919050565b611c2281611c0f565b8114611c2d57600080fd5b50565b600081359050611c3f81611c19565b92915050565b60008060408385031215611c5c57611c5b611bcc565b5b6000611c6a85828601611bfa565b9250506020611c7b85828601611c30565b9150509250929050565b60008115159050919050565b611c9a81611c85565b82525050565b6000602082019050611cb56000830184611c91565b92915050565b611cc481611c0f565b82525050565b6000602082019050611cdf6000830184611cbb565b92915050565b600080600060608486031215611cfe57611cfd611bcc565b5b6000611d0c86828701611bfa565b9350506020611d1d86828701611bfa565b9250506040611d2e86828701611c30565b9150509250925092565b600060ff82169050919050565b611d4e81611d38565b82525050565b6000602082019050611d696000830184611d45565b92915050565b600060208284031215611d8557611d84611bcc565b5b6000611d9384828501611bfa565b91505092915050565b611da581611bd1565b82525050565b6000602082019050611dc06000830184611d9c565b92915050565b60008060408385031215611ddd57611ddc611bcc565b5b6000611deb85828601611c30565b9250506020611dfc85828601611bfa565b9150509250929050565b60008060408385031215611e1d57611e1c611bcc565b5b6000611e2b85828601611bfa565b9250506020611e3c85828601611bfa565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611e8d57607f821691505b602082108103611ea057611e9f611e46565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ee082611c0f565b9150611eeb83611c0f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611f2057611f1f611ea6565b5b828201905092915050565b7f43616e6e6f7420736574206d61726b6574706c61636520746f2030206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611f87602383611b1c565b9150611f9282611f2b565b604082019050919050565b60006020820190508181036000830152611fb681611f7a565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000612019602583611b1c565b915061202482611fbd565b604082019050919050565b600060208201905081810360008301526120488161200c565b9050919050565b7f43616e6e6f74206d696e7420706f7420746f207a65726f206164647265737300600082015250565b6000612085601f83611b1c565b91506120908261204f565b602082019050919050565b600060208201905081810360008301526120b481612078565b9050919050565b7f506f7420436f6e74726163743a20556e617574686f72697a6564000000000000600082015250565b60006120f1601a83611b1c565b91506120fc826120bb565b602082019050919050565b60006020820190508181036000830152612120816120e4565b9050919050565b600060408201905061213c6000830185611cbb565b6121496020830184611d9c565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006121ac602683611b1c565b91506121b782612150565b604082019050919050565b600060208201905081810360008301526121db8161219f565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061223e602483611b1c565b9150612249826121e2565b604082019050919050565b6000602082019050818103600083015261226d81612231565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006122d0602283611b1c565b91506122db82612274565b604082019050919050565b600060208201905081810360008301526122ff816122c3565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061233c601d83611b1c565b915061234782612306565b602082019050919050565b6000602082019050818103600083015261236b8161232f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006123ce602583611b1c565b91506123d982612372565b604082019050919050565b600060208201905081810360008301526123fd816123c1565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000612460602383611b1c565b915061246b82612404565b604082019050919050565b6000602082019050818103600083015261248f81612453565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006124f2602683611b1c565b91506124fd82612496565b604082019050919050565b60006020820190508181036000830152612521816124e5565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061255e602083611b1c565b915061256982612528565b602082019050919050565b6000602082019050818103600083015261258d81612551565b9050919050565b7f417574683a20556e617574686f72697a65640000000000000000000000000000600082015250565b60006125ca601283611b1c565b91506125d582612594565b602082019050919050565b600060208201905081810360008301526125f9816125bd565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000612636601f83611b1c565b915061264182612600565b602082019050919050565b6000602082019050818103600083015261266581612629565b905091905056fea26469706673582212204b177bd94c4a0eb93d54c637e07f4160a11eb659fe67b54d31f7fb6dbb8d338e64736f6c634300080d0033";

type PotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Pot__factory extends ContractFactory {
  constructor(...args: PotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    _landContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Pot> {
    return super.deploy(
      _name,
      _symbol,
      _landContract,
      overrides || {}
    ) as Promise<Pot>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    _landContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _landContract,
      overrides || {}
    );
  }
  attach(address: string): Pot {
    return super.attach(address) as Pot;
  }
  connect(signer: Signer): Pot__factory {
    return super.connect(signer) as Pot__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PotInterface {
    return new utils.Interface(_abi) as PotInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Pot {
    return new Contract(address, _abi, signerOrProvider) as Pot;
  }
}
