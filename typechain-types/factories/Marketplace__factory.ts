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
    name: "catsAndSoupContract",
    outputs: [
      {
        internalType: "contract CatsAndSoup",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currencyContract",
    outputs: [
      {
        internalType: "contract Currency",
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
    name: "potContract",
    outputs: [
      {
        internalType: "contract Pot",
        name: "",
        type: "address",
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
    name: "setContractAuths",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x6080604052670de0b6b3a764000060065567016345785d8a00006007556706f05b59d3b200006008556706f05b59d3b200006009553480156200004157600080fd5b50604051620021193803806200211983398181016040528101906200006791906200058a565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555082600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001d8336200034e60201b62000fa71760201c565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a22cb465600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518363ffffffff1660e01b81526004016200025a9291906200062a565b600060405180830381600087803b1580156200027557600080fd5b505af11580156200028a573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a22cb465600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016040518363ffffffff1660e01b8152600401620003109291906200062a565b600060405180830381600087803b1580156200032b57600080fd5b505af115801562000340573d6000803e3d6000fd5b5050505050505050620006da565b600115156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514620003e3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003da90620006b8565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200046f8262000442565b9050919050565b6000620004838262000462565b9050919050565b620004958162000476565b8114620004a157600080fd5b50565b600081519050620004b5816200048a565b92915050565b6000620004c88262000462565b9050919050565b620004da81620004bb565b8114620004e657600080fd5b50565b600081519050620004fa81620004cf565b92915050565b60006200050d8262000462565b9050919050565b6200051f8162000500565b81146200052b57600080fd5b50565b6000815190506200053f8162000514565b92915050565b6000620005528262000462565b9050919050565b620005648162000545565b81146200057057600080fd5b50565b600081519050620005848162000559565b92915050565b60008060008060808587031215620005a757620005a66200043d565b5b6000620005b787828801620004a4565b9450506020620005ca87828801620004e9565b9350506040620005dd878288016200052e565b9250506060620005f08782880162000573565b91505092959194509250565b620006078162000462565b82525050565b60008115159050919050565b62000624816200060d565b82525050565b6000604082019050620006416000830185620005fc565b62000650602083018462000619565b9392505050565b600082825260208201905092915050565b7f417574683a20556e617574686f72697a65640000000000000000000000000000600082015250565b6000620006a060128362000657565b9150620006ad8262000668565b602082019050919050565b60006020820190508181036000830152620006d38162000691565b9050919050565b611a2f80620006ea6000396000f3fe6080604052600436106100e85760003560e01c80636e4e3e2d1161008a578063b95812f411610059578063b95812f4146102b8578063ced39558146102e3578063e7fb74c7146102ff578063fc22c15c1461031b576100e8565b80636e4e3e2d146101f75780636f77926b146102345780637b31c11e146102715780639af91bbb1461029c576100e8565b80634cba1e79116100c65780634cba1e791461015f57806358defcb4146101765780635c30518f146101a1578063670506e9146101cc576100e8565b806303d07340146100ed578063064c2ce2146101185780633ad4c34214610134575b600080fd5b3480156100f957600080fd5b50610102610346565b60405161010f919061116c565b60405180910390f35b610132600480360381019061012d91906111c2565b61036c565b005b34801561014057600080fd5b5061014961052a565b60405161015691906111fe565b60405180910390f35b34801561016b57600080fd5b50610174610530565b005b34801561018257600080fd5b5061018b610672565b604051610198919061123a565b60405180910390f35b3480156101ad57600080fd5b506101b6610698565b6040516101c391906111fe565b60405180910390f35b3480156101d857600080fd5b506101e161069e565b6040516101ee91906111fe565b60405180910390f35b34801561020357600080fd5b5061021e60048036038101906102199190611293565b6106a4565b60405161022b91906112db565b60405180910390f35b34801561024057600080fd5b5061025b60048036038101906102569190611293565b6106f9565b60405161026891906112db565b60405180910390f35b34801561027d57600080fd5b5061028661074f565b6040516102939190611317565b60405180910390f35b6102b660048036038101906102b191906111c2565b610775565b005b3480156102c457600080fd5b506102cd610a8b565b6040516102da9190611353565b60405180910390f35b6102fd60048036038101906102f891906111c2565b610ab1565b005b610319600480360381019061031491906111c2565b610c6f565b005b34801561032757600080fd5b50610330610fa1565b60405161033d91906111fe565b60405180910390f35b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6007543410156103b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103a8906113cb565b60405180910390fd5b6103ba33611093565b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a7833826040516103eb929190611446565b60405180910390a1600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306007546040518463ffffffff1660e01b815260040161045493929190611482565b6020604051808303816000875af1158015610473573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049791906114e5565b50600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b796340b82336040518363ffffffff1660e01b81526004016104f5929190611512565b600060405180830381600087803b15801561050f57600080fd5b505af1158015610523573d6000803e3d6000fd5b5050505050565b60085481565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166105bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b290611587565b60405180910390fd5b6105c430610fa7565b6105ef600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610fa7565b61061a600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610fa7565b610645600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610fa7565b610670600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610fa7565b565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b60095481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60001515600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ff90611619565b60405180910390fd5b61081133611093565b7f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610842929190611685565b60405180910390a1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637ed11e6282336040518363ffffffff1660e01b81526004016108a7929190611512565b600060405180830381600087803b1580156108c157600080fd5b505af11580156108d5573d6000803e3d6000fd5b50505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b796340b82336040518363ffffffff1660e01b8152600401610936929190611512565b600060405180830381600087803b15801561095057600080fd5b505af1158015610964573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dc936c06000336040518363ffffffff1660e01b81526004016109c69291906116fc565b600060405180830381600087803b1580156109e057600080fd5b505af11580156109f4573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dc936c06001336040518363ffffffff1660e01b8152600401610a56929190611760565b600060405180830381600087803b158015610a7057600080fd5b505af1158015610a84573d6000803e3d6000fd5b5050505050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600654341015610af6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aed906113cb565b60405180910390fd5b610aff33611093565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306006546040518463ffffffff1660e01b8152600401610b6093929190611482565b6020604051808303816000875af1158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba391906114e5565b507f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610bd59291906117d5565b60405180910390a1600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637ed11e6282336040518363ffffffff1660e01b8152600401610c3a929190611512565b600060405180830381600087803b158015610c5457600080fd5b505af1158015610c68573d6000803e3d6000fd5b5050505050565b60028110610cb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca99061185d565b60405180910390fd5b610cbb33611093565b60008103610deb57600854341015610d08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cff906113cb565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306008546040518463ffffffff1660e01b8152600401610d6993929190611482565b6020604051808303816000875af1158015610d88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dac91906114e5565b507f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610dde9291906118c9565b60405180910390a1610f0f565b600954341015610e30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e27906113cb565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd33306009546040518463ffffffff1660e01b8152600401610e9193929190611482565b6020604051808303816000875af1158015610eb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed491906114e5565b507f32a178036e4b78fc63019758f0b1bde285f6fba98dd3f91bf67a5fd809d76a783382604051610f06929190611951565b60405180910390a15b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634dc936c082336040518363ffffffff1660e01b8152600401610f6c929190611512565b600060405180830381600087803b158015610f8657600080fd5b505af1158015610f9a573d6000803e3d6000fd5b5050505050565b60065481565b600115156000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514611039576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611030906119d9565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061113261112d611128846110ed565b61110d565b6110ed565b9050919050565b600061114482611117565b9050919050565b600061115682611139565b9050919050565b6111668161114b565b82525050565b6000602082019050611181600083018461115d565b92915050565b600080fd5b6000819050919050565b61119f8161118c565b81146111aa57600080fd5b50565b6000813590506111bc81611196565b92915050565b6000602082840312156111d8576111d7611187565b5b60006111e6848285016111ad565b91505092915050565b6111f88161118c565b82525050565b600060208201905061121360008301846111ef565b92915050565b600061122482611139565b9050919050565b61123481611219565b82525050565b600060208201905061124f600083018461122b565b92915050565b6000611260826110ed565b9050919050565b61127081611255565b811461127b57600080fd5b50565b60008135905061128d81611267565b92915050565b6000602082840312156112a9576112a8611187565b5b60006112b78482850161127e565b91505092915050565b60008115159050919050565b6112d5816112c0565b82525050565b60006020820190506112f060008301846112cc565b92915050565b600061130182611139565b9050919050565b611311816112f6565b82525050565b600060208201905061132c6000830184611308565b92915050565b600061133d82611139565b9050919050565b61134d81611332565b82525050565b60006020820190506113686000830184611344565b92915050565b600082825260208201905092915050565b7f4e6f7420656e6f7567682063757272656e63792073656e740000000000000000600082015250565b60006113b560188361136e565b91506113c08261137f565b602082019050919050565b600060208201905081810360008301526113e4816113a8565b9050919050565b7f506f740000000000000000000000000000000000000000000000000000000000600082015250565b600061142160038361136e565b915061142c826113eb565b602082019050919050565b61144081611255565b82525050565b6000606082019050818103600083015261145f81611414565b905061146e6020830185611437565b61147b60408301846111ef565b9392505050565b60006060820190506114976000830186611437565b6114a46020830185611437565b6114b160408301846111ef565b949350505050565b6114c2816112c0565b81146114cd57600080fd5b50565b6000815190506114df816114b9565b92915050565b6000602082840312156114fb576114fa611187565b5b6000611509848285016114d0565b91505092915050565b600060408201905061152760008301856111ef565b6115346020830184611437565b9392505050565b7f4d61726b6574706c6163653a20556e617574686f72697a656400000000000000600082015250565b600061157160198361136e565b915061157c8261153b565b602082019050919050565b600060208201905081810360008301526115a081611564565b9050919050565b7f596f752063616e6e6f742070757263686173652061207374617274657220706160008201527f636b000000000000000000000000000000000000000000000000000000000000602082015250565b600061160360228361136e565b915061160e826115a7565b604082019050919050565b60006020820190508181036000830152611632816115f6565b9050919050565b7f53746172746572205061636b0000000000000000000000000000000000000000600082015250565b600061166f600c8361136e565b915061167a82611639565b602082019050919050565b6000606082019050818103600083015261169e81611662565b90506116ad6020830185611437565b6116ba60408301846111ef565b9392505050565b6000819050919050565b60006116e66116e16116dc846116c1565b61110d565b61118c565b9050919050565b6116f6816116cb565b82525050565b600060408201905061171160008301856116ed565b61171e6020830184611437565b9392505050565b6000819050919050565b600061174a61174561174084611725565b61110d565b61118c565b9050919050565b61175a8161172f565b82525050565b60006040820190506117756000830185611751565b6117826020830184611437565b9392505050565b7f4c616e6400000000000000000000000000000000000000000000000000000000600082015250565b60006117bf60048361136e565b91506117ca82611789565b602082019050919050565b600060608201905081810360008301526117ee816117b2565b90506117fd6020830185611437565b61180a60408301846111ef565b9392505050565b7f54686973206974656d20646f6573206e6f742065786973740000000000000000600082015250565b600061184760188361136e565b915061185282611811565b602082019050919050565b600060208201905081810360008301526118768161183a565b9050919050565b7f4361740000000000000000000000000000000000000000000000000000000000600082015250565b60006118b360038361136e565b91506118be8261187d565b602082019050919050565b600060608201905081810360008301526118e2816118a6565b90506118f16020830185611437565b6118fe60408301846111ef565b9392505050565b7f536f757000000000000000000000000000000000000000000000000000000000600082015250565b600061193b60048361136e565b915061194682611905565b602082019050919050565b6000606082019050818103600083015261196a8161192e565b90506119796020830185611437565b61198660408301846111ef565b9392505050565b7f417574683a20556e617574686f72697a65640000000000000000000000000000600082015250565b60006119c360128361136e565b91506119ce8261198d565b602082019050919050565b600060208201905081810360008301526119f2816119b6565b905091905056fea2646970667358221220fb840233015de62b54516dd27554ff2a173924a0693d2a22a7f839e8b9b2fb4764736f6c634300080d0033";

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
