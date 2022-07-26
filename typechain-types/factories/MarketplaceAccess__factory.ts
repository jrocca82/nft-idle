/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MarketplaceAccess,
  MarketplaceAccessInterface,
} from "../MarketplaceAccess";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketplace",
        type: "address",
      },
    ],
    name: "MarketplaceSet",
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
    inputs: [],
    name: "_marketplace",
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
        name: "marketplace",
        type: "address",
      },
    ],
    name: "setMarketplace",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6106af8061010d6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c57806373ad6c2d146100665780638da5cb5b14610082578063be546221146100a0578063f2fde38b146100be575b600080fd5b6100646100da565b005b610080600480360381019061007b9190610481565b6100ee565b005b61008a610202565b60405161009791906104bd565b60405180910390f35b6100a861022b565b6040516100b591906104bd565b60405180910390f35b6100d860048036038101906100d39190610481565b610251565b005b6100e26102d4565b6100ec6000610352565b565b6100f66102d4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610165576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015c9061055b565b60405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f78fd71746fd8724dd16b5a93e765a076614159ebdc73d996a6a8884f358898e5600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516101f791906104bd565b60405180910390a150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6102596102d4565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bf906105ed565b60405180910390fd5b6102d181610352565b50565b6102dc610416565b73ffffffffffffffffffffffffffffffffffffffff166102fa610202565b73ffffffffffffffffffffffffffffffffffffffff1614610350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034790610659565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061044e82610423565b9050919050565b61045e81610443565b811461046957600080fd5b50565b60008135905061047b81610455565b92915050565b6000602082840312156104975761049661041e565b5b60006104a58482850161046c565b91505092915050565b6104b781610443565b82525050565b60006020820190506104d260008301846104ae565b92915050565b600082825260208201905092915050565b7f43616e6e6f742061737369676e206d61726b6574706c61636520746f207a657260008201527f6f20616464726573730000000000000000000000000000000000000000000000602082015250565b60006105456029836104d8565b9150610550826104e9565b604082019050919050565b6000602082019050818103600083015261057481610538565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006105d76026836104d8565b91506105e28261057b565b604082019050919050565b60006020820190508181036000830152610606816105ca565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006106436020836104d8565b915061064e8261060d565b602082019050919050565b6000602082019050818103600083015261067281610636565b905091905056fea2646970667358221220cd8fb7d2d7cb185ef16ccc60df113d131d42667a342600dffa2f0102a97adbf464736f6c634300080d0033";

type MarketplaceAccessConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceAccessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MarketplaceAccess__factory extends ContractFactory {
  constructor(...args: MarketplaceAccessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MarketplaceAccess> {
    return super.deploy(overrides || {}) as Promise<MarketplaceAccess>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MarketplaceAccess {
    return super.attach(address) as MarketplaceAccess;
  }
  connect(signer: Signer): MarketplaceAccess__factory {
    return super.connect(signer) as MarketplaceAccess__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceAccessInterface {
    return new utils.Interface(_abi) as MarketplaceAccessInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceAccess {
    return new Contract(address, _abi, signerOrProvider) as MarketplaceAccess;
  }
}
