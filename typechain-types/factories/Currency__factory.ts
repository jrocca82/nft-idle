/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Currency, CurrencyInterface } from "../Currency";

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
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "CurrencyEarned",
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
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintCurrency",
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
  "0x60a06040523480156200001157600080fd5b5060405162001d5a38038062001d5a8339818101604052810190620000379190620003bf565b818181600390805190602001906200005192919062000172565b5080600490805190602001906200006a92919062000172565b5050506200008d62000081620000a460201b60201c565b620000ac60201b60201c565b601260ff1660808160ff16815250505050620004a8565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001809062000473565b90600052602060002090601f016020900481019282620001a45760008555620001f0565b82601f10620001bf57805160ff1916838001178555620001f0565b82800160010185558215620001f0579182015b82811115620001ef578251825591602001919060010190620001d2565b5b509050620001ff919062000203565b5090565b5b808211156200021e57600081600090555060010162000204565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200028b8262000240565b810181811067ffffffffffffffff82111715620002ad57620002ac62000251565b5b80604052505050565b6000620002c262000222565b9050620002d0828262000280565b919050565b600067ffffffffffffffff821115620002f357620002f262000251565b5b620002fe8262000240565b9050602081019050919050565b60005b838110156200032b5780820151818401526020810190506200030e565b838111156200033b576000848401525b50505050565b6000620003586200035284620002d5565b620002b6565b9050828152602081018484840111156200037757620003766200023b565b5b620003848482856200030b565b509392505050565b600082601f830112620003a457620003a362000236565b5b8151620003b684826020860162000341565b91505092915050565b60008060408385031215620003d957620003d86200022c565b5b600083015167ffffffffffffffff811115620003fa57620003f962000231565b5b62000408858286016200038c565b925050602083015167ffffffffffffffff8111156200042c576200042b62000231565b5b6200043a858286016200038c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200048c57607f821691505b602082108103620004a257620004a162000444565b5b50919050565b608051611896620004c4600039600061041401526118966000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a9059cbb11610066578063a9059cbb1461028a578063cb7e6579146102ba578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b8063715018a6146102145780638da5cb5b1461021e57806395d89b411461023c578063a457c2d71461025a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f9190610f94565b60405180910390f35b610132600480360381019061012d919061104f565b6103b4565b60405161013f91906110aa565b60405180910390f35b6101506103d7565b60405161015d91906110d4565b60405180910390f35b610180600480360381019061017b91906110ef565b6103e1565b60405161018d91906110aa565b60405180910390f35b61019e610410565b6040516101ab919061115e565b60405180910390f35b6101ce60048036038101906101c9919061104f565b610438565b6040516101db91906110aa565b60405180910390f35b6101fe60048036038101906101f99190611179565b61046f565b60405161020b91906110d4565b60405180910390f35b61021c6104b7565b005b6102266104cb565b60405161023391906111b5565b60405180910390f35b6102446104f5565b6040516102519190610f94565b60405180910390f35b610274600480360381019061026f919061104f565b610587565b60405161028191906110aa565b60405180910390f35b6102a4600480360381019061029f919061104f565b6105fe565b6040516102b191906110aa565b60405180910390f35b6102d460048036038101906102cf919061104f565b610621565b005b6102f060048036038101906102eb91906111d0565b610668565b6040516102fd91906110d4565b60405180910390f35b610320600480360381019061031b9190611179565b6106ef565b005b6060600380546103319061123f565b80601f016020809104026020016040519081016040528092919081815260200182805461035d9061123f565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610772565b90506103cc81858561077a565b600191505092915050565b6000600254905090565b6000806103ec610772565b90506103f9858285610943565b6104048585856109cf565b60019150509392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b600080610443610772565b90506104648185856104558589610668565b61045f919061129f565b61077a565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104bf610c4e565b6104c96000610ccc565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546105049061123f565b80601f01602080910402602001604051908101604052809291908181526020018280546105309061123f565b801561057d5780601f106105525761010080835404028352916020019161057d565b820191906000526020600020905b81548152906001019060200180831161056057829003601f168201915b5050505050905090565b600080610592610772565b905060006105a08286610668565b9050838110156105e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105dc90611367565b60405180910390fd5b6105f2828686840361077a565b60019250505092915050565b600080610609610772565b90506106168185856109cf565b600191505092915050565b7fa7e7944a3d5b506243dd0cf3344ca65bcaa77f402964b996b087a860097916c38282604051610652929190611387565b60405180910390a16106648282610d92565b5050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106f7610c4e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610766576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161075d90611422565b60405180910390fd5b61076f81610ccc565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036107e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107e0906114b4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610858576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084f90611546565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161093691906110d4565b60405180910390a3505050565b600061094f8484610668565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146109c957818110156109bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b2906115b2565b60405180910390fd5b6109c8848484840361077a565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610a3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3590611644565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aad576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aa4906116d6565b60405180910390fd5b610ab8838383610ef1565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610b3e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3590611768565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bd1919061129f565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610c3591906110d4565b60405180910390a3610c48848484610ef6565b50505050565b610c56610772565b73ffffffffffffffffffffffffffffffffffffffff16610c746104cb565b73ffffffffffffffffffffffffffffffffffffffff1614610cca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc1906117d4565b60405180910390fd5b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e01576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df890611840565b60405180910390fd5b610e0d60008383610ef1565b8060026000828254610e1f919061129f565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e74919061129f565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ed991906110d4565b60405180910390a3610eed60008383610ef6565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f35578082015181840152602081019050610f1a565b83811115610f44576000848401525b50505050565b6000601f19601f8301169050919050565b6000610f6682610efb565b610f708185610f06565b9350610f80818560208601610f17565b610f8981610f4a565b840191505092915050565b60006020820190508181036000830152610fae8184610f5b565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610fe682610fbb565b9050919050565b610ff681610fdb565b811461100157600080fd5b50565b60008135905061101381610fed565b92915050565b6000819050919050565b61102c81611019565b811461103757600080fd5b50565b60008135905061104981611023565b92915050565b6000806040838503121561106657611065610fb6565b5b600061107485828601611004565b92505060206110858582860161103a565b9150509250929050565b60008115159050919050565b6110a48161108f565b82525050565b60006020820190506110bf600083018461109b565b92915050565b6110ce81611019565b82525050565b60006020820190506110e960008301846110c5565b92915050565b60008060006060848603121561110857611107610fb6565b5b600061111686828701611004565b935050602061112786828701611004565b92505060406111388682870161103a565b9150509250925092565b600060ff82169050919050565b61115881611142565b82525050565b6000602082019050611173600083018461114f565b92915050565b60006020828403121561118f5761118e610fb6565b5b600061119d84828501611004565b91505092915050565b6111af81610fdb565b82525050565b60006020820190506111ca60008301846111a6565b92915050565b600080604083850312156111e7576111e6610fb6565b5b60006111f585828601611004565b925050602061120685828601611004565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061125757607f821691505b60208210810361126a57611269611210565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112aa82611019565b91506112b583611019565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156112ea576112e9611270565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611351602583610f06565b915061135c826112f5565b604082019050919050565b6000602082019050818103600083015261138081611344565b9050919050565b600060408201905061139c60008301856111a6565b6113a960208301846110c5565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061140c602683610f06565b9150611417826113b0565b604082019050919050565b6000602082019050818103600083015261143b816113ff565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061149e602483610f06565b91506114a982611442565b604082019050919050565b600060208201905081810360008301526114cd81611491565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611530602283610f06565b915061153b826114d4565b604082019050919050565b6000602082019050818103600083015261155f81611523565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061159c601d83610f06565b91506115a782611566565b602082019050919050565b600060208201905081810360008301526115cb8161158f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061162e602583610f06565b9150611639826115d2565b604082019050919050565b6000602082019050818103600083015261165d81611621565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006116c0602383610f06565b91506116cb82611664565b604082019050919050565b600060208201905081810360008301526116ef816116b3565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611752602683610f06565b915061175d826116f6565b604082019050919050565b6000602082019050818103600083015261178181611745565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006117be602083610f06565b91506117c982611788565b602082019050919050565b600060208201905081810360008301526117ed816117b1565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b600061182a601f83610f06565b9150611835826117f4565b602082019050919050565b600060208201905081810360008301526118598161181d565b905091905056fea26469706673582212207a9bbe1d4a0ea3b4a357219c3292f8d81e1bd014ee745fb7407854ecee3c72f164736f6c634300080d0033";

type CurrencyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurrencyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Currency__factory extends ContractFactory {
  constructor(...args: CurrencyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Currency> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<Currency>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): Currency {
    return super.attach(address) as Currency;
  }
  connect(signer: Signer): Currency__factory {
    return super.connect(signer) as Currency__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurrencyInterface {
    return new utils.Interface(_abi) as CurrencyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Currency {
    return new Contract(address, _abi, signerOrProvider) as Currency;
  }
}