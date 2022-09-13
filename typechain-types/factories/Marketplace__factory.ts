/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Marketplace, MarketplaceInterface } from "../Marketplace";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Pot",
        name: "_potContract",
        type: "address",
      },
      {
        internalType: "contract Land",
        name: "_landContract",
        type: "address",
      },
      {
        internalType: "contract Currency",
        name: "_currencyContract",
        type: "address",
      },
      {
        internalType: "contract CatsAndSoup",
        name: "_catsAndSoupContract",
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
        indexed: false,
        internalType: "string",
        name: "purchaseType",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "purchaser",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_itemId",
        type: "uint256",
      },
    ],
    name: "buyItem",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_landId",
        type: "uint256",
      },
    ],
    name: "buyLand",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_landId",
        type: "uint256",
      },
    ],
    name: "buyPot",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_landId",
        type: "uint256",
      },
    ],
    name: "buyStarterPack",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "catPrice",
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
    name: "landPrice",
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
    name: "potPrice",
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
    name: "soupPrice",
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
    name: "startPackPrice",
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
];

const _bytecode =
  "0x6080604052670de0b6b3a764000060045567016345785d8a00006005556706f05b59d3b20000600655670429d069189e0000600755670de0b6b3a76400006008553480156200004d57600080fd5b506040516200156f3803806200156f8339818101604052810190620000739190620003b5565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603620000ad57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603620000e757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200012157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036200015b57600080fd5b836000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505062000427565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200029a826200026d565b9050919050565b6000620002ae826200028d565b9050919050565b620002c081620002a1565b8114620002cc57600080fd5b50565b600081519050620002e081620002b5565b92915050565b6000620002f3826200028d565b9050919050565b6200030581620002e6565b81146200031157600080fd5b50565b6000815190506200032581620002fa565b92915050565b600062000338826200028d565b9050919050565b6200034a816200032b565b81146200035657600080fd5b50565b6000815190506200036a816200033f565b92915050565b60006200037d826200028d565b9050919050565b6200038f8162000370565b81146200039b57600080fd5b50565b600081519050620003af8162000384565b92915050565b60008060008060808587031215620003d257620003d162000268565b5b6000620003e287828801620002cf565b9450506020620003f58782880162000314565b9350506040620004088782880162000359565b92505060606200041b878288016200039e565b91505092959194509250565b61113880620004376000396000f3fe6080604052600436106100865760003560e01c80639af91bbb116100595780639af91bbb14610128578063ced3955814610144578063e7fb74c714610160578063f156c2991461017c578063fc22c15c146101a757610086565b8063064c2ce21461008b5780633ad4c342146100a75780635c30518f146100d2578063670506e9146100fd575b600080fd5b6100a560048036038101906100a09190610ab9565b6101d2565b005b3480156100b357600080fd5b506100bc6104c5565b6040516100c99190610af5565b60405180910390f35b3480156100de57600080fd5b506100e76104cb565b6040516100f49190610af5565b60405180910390f35b34801561010957600080fd5b506101126104d1565b60405161011f9190610af5565b60405180910390f35b610142600480360381019061013d9190610ab9565b6104d7565b005b61015e60048036038101906101599190610ab9565b610636565b005b61017a60048036038101906101759190610ab9565b6107b5565b005b34801561018857600080fd5b50610191610a72565b60405161019e9190610af5565b60405180910390f35b3480156101b357600080fd5b506101bc610a78565b6040516101c99190610af5565b60405180910390f35b6005543410156101e157600080fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161023a9190610b51565b602060405180830381865afa158015610257573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027b9190610b81565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016102d69190610b51565b602060405180830381865afa1580156102f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103179190610b81565b11610357576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034e90610c0b565b60405180910390fd5b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610388929190610c77565b60405180910390a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306005546040518463ffffffff1660e01b81526004016103f193929190610cb3565b6020604051808303816000875af1158015610410573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104349190610d22565b5060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b796340b82336040518363ffffffff1660e01b8152600401610490929190610d4f565b600060405180830381600087803b1580156104aa57600080fd5b505af11580156104be573d6000803e3d6000fd5b5050505050565b60065481565b60055481565b60075481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016105349190610b51565b602060405180830381865afa158015610551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105759190610b81565b146105b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ac90610dea565b60405180910390fd5b6008543410156105fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f190610e56565b60405180910390fd5b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a78338260405161062b929190610ec2565b60405180910390a150565b60045434101561064557600080fd5b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610676929190610f4a565b60405180910390a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306004546040518463ffffffff1660e01b81526004016106df93929190610cb3565b6020604051808303816000875af11580156106fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107229190610d22565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637ed11e6282336040518363ffffffff1660e01b8152600401610780929190610d4f565b600060405180830381600087803b15801561079a57600080fd5b505af11580156107ae573d6000803e3d6000fd5b5050505050565b600281106107f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ef90610fd2565b60405180910390fd5b600081036108f25760065434101561080f57600080fd5b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a78338260405161084092919061103e565b60405180910390a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306006546040518463ffffffff1660e01b81526004016108a993929190610cb3565b6020604051808303816000875af11580156108c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108ec9190610d22565b506109e0565b60075434101561090157600080fd5b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a7833826040516109329291906110c6565b60405180910390a1600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306007546040518463ffffffff1660e01b815260040161099b93929190610cb3565b6020604051808303816000875af11580156109ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109de9190610d22565b505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dc936c082336040518363ffffffff1660e01b8152600401610a3d929190610d4f565b600060405180830381600087803b158015610a5757600080fd5b505af1158015610a6b573d6000803e3d6000fd5b5050505050565b60085481565b60045481565b600080fd5b6000819050919050565b610a9681610a83565b8114610aa157600080fd5b50565b600081359050610ab381610a8d565b92915050565b600060208284031215610acf57610ace610a7e565b5b6000610add84828501610aa4565b91505092915050565b610aef81610a83565b82525050565b6000602082019050610b0a6000830184610ae6565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b3b82610b10565b9050919050565b610b4b81610b30565b82525050565b6000602082019050610b666000830184610b42565b92915050565b600081519050610b7b81610a8d565b92915050565b600060208284031215610b9757610b96610a7e565b5b6000610ba584828501610b6c565b91505092915050565b600082825260208201905092915050565b7f596f75206e65656420746f206275792061206c616e6420666972737400000000600082015250565b6000610bf5601c83610bae565b9150610c0082610bbf565b602082019050919050565b60006020820190508181036000830152610c2481610be8565b9050919050565b7f506f740000000000000000000000000000000000000000000000000000000000600082015250565b6000610c61600383610bae565b9150610c6c82610c2b565b602082019050919050565b60006060820190508181036000830152610c9081610c54565b9050610c9f6020830185610b42565b610cac6040830184610ae6565b9392505050565b6000606082019050610cc86000830186610b42565b610cd56020830185610b42565b610ce26040830184610ae6565b949350505050565b60008115159050919050565b610cff81610cea565b8114610d0a57600080fd5b50565b600081519050610d1c81610cf6565b92915050565b600060208284031215610d3857610d37610a7e565b5b6000610d4684828501610d0d565b91505092915050565b6000604082019050610d646000830185610ae6565b610d716020830184610b42565b9392505050565b7f596f752063616e6e6f742070757263686173652061207374617274657220706160008201527f636b000000000000000000000000000000000000000000000000000000000000602082015250565b6000610dd4602283610bae565b9150610ddf82610d78565b604082019050919050565b60006020820190508181036000830152610e0381610dc7565b9050919050565b7f4e6f7420656e6f75676820455448000000000000000000000000000000000000600082015250565b6000610e40600e83610bae565b9150610e4b82610e0a565b602082019050919050565b60006020820190508181036000830152610e6f81610e33565b9050919050565b7f53746172746572205061636b0000000000000000000000000000000000000000600082015250565b6000610eac600c83610bae565b9150610eb782610e76565b602082019050919050565b60006060820190508181036000830152610edb81610e9f565b9050610eea6020830185610b42565b610ef76040830184610ae6565b9392505050565b7f4c616e6400000000000000000000000000000000000000000000000000000000600082015250565b6000610f34600483610bae565b9150610f3f82610efe565b602082019050919050565b60006060820190508181036000830152610f6381610f27565b9050610f726020830185610b42565b610f7f6040830184610ae6565b9392505050565b7f54686973206974656d20646f6573206e6f742065786973740000000000000000600082015250565b6000610fbc601883610bae565b9150610fc782610f86565b602082019050919050565b60006020820190508181036000830152610feb81610faf565b9050919050565b7f4361740000000000000000000000000000000000000000000000000000000000600082015250565b6000611028600383610bae565b915061103382610ff2565b602082019050919050565b600060608201905081810360008301526110578161101b565b90506110666020830185610b42565b6110736040830184610ae6565b9392505050565b7f536f757000000000000000000000000000000000000000000000000000000000600082015250565b60006110b0600483610bae565b91506110bb8261107a565b602082019050919050565b600060608201905081810360008301526110df816110a3565b90506110ee6020830185610b42565b6110fb6040830184610ae6565b939250505056fea2646970667358221220e21904d80c3b3c13211581c7b108fb8098400baee67087c536cf1ec4d8cdaec464736f6c634300080d0033";

type MarketplaceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MarketplaceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Marketplace__factory extends ContractFactory {
  constructor(...args: MarketplaceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _potContract: string,
    _landContract: string,
    _currencyContract: string,
    _catsAndSoupContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Marketplace> {
    return super.deploy(
      _potContract,
      _landContract,
      _currencyContract,
      _catsAndSoupContract,
      overrides || {}
    ) as Promise<Marketplace>;
  }
  getDeployTransaction(
    _potContract: string,
    _landContract: string,
    _currencyContract: string,
    _catsAndSoupContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _potContract,
      _landContract,
      _currencyContract,
      _catsAndSoupContract,
      overrides || {}
    );
  }
  attach(address: string): Marketplace {
    return super.attach(address) as Marketplace;
  }
  connect(signer: Signer): Marketplace__factory {
    return super.connect(signer) as Marketplace__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MarketplaceInterface {
    return new utils.Interface(_abi) as MarketplaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Marketplace {
    return new Contract(address, _abi, signerOrProvider) as Marketplace;
  }
}
