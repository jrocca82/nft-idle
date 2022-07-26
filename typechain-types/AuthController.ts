/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AuthControllerInterface extends utils.Interface {
  functions: {
    "getAuth(address)": FunctionFragment;
    "getUser(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "getAuth", values: [string]): string;
  encodeFunctionData(functionFragment: "getUser", values: [string]): string;

  decodeFunctionResult(functionFragment: "getAuth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;

  events: {};
}

export interface AuthController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AuthControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAuth(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    getUser(_address: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  getAuth(_address: string, overrides?: CallOverrides): Promise<boolean>;

  getUser(_address: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getAuth(_address: string, overrides?: CallOverrides): Promise<boolean>;

    getUser(_address: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getAuth(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    getUser(_address: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getAuth(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUser(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
