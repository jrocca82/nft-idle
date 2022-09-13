/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "buyItem(uint256)": FunctionFragment;
    "buyLand(uint256)": FunctionFragment;
    "buyPot(uint256)": FunctionFragment;
    "buyStarterPack(uint256)": FunctionFragment;
    "catPrice()": FunctionFragment;
    "landPrice()": FunctionFragment;
    "potPrice()": FunctionFragment;
    "soupPrice()": FunctionFragment;
    "startPackPrice()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyItem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyLand",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyPot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buyStarterPack",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "catPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "landPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "potPrice", values?: undefined): string;
  encodeFunctionData(functionFragment: "soupPrice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startPackPrice",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyItem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyLand", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyPot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyStarterPack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "catPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "landPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "potPrice", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "soupPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startPackPrice",
    data: BytesLike
  ): Result;

  events: {
    "Purchase(string,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Purchase"): EventFragment;
}

export type PurchaseEvent = TypedEvent<
  [string, string, BigNumber],
  { purchaseType: string; purchaser: string; id: BigNumber }
>;

export type PurchaseEventFilter = TypedEventFilter<PurchaseEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

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
    buyItem(
      _itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyLand(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyPot(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyStarterPack(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    catPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    landPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    potPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    soupPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    startPackPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buyItem(
    _itemId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyLand(
    _landId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyPot(
    _landId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyStarterPack(
    _landId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  catPrice(overrides?: CallOverrides): Promise<BigNumber>;

  landPrice(overrides?: CallOverrides): Promise<BigNumber>;

  potPrice(overrides?: CallOverrides): Promise<BigNumber>;

  soupPrice(overrides?: CallOverrides): Promise<BigNumber>;

  startPackPrice(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buyItem(_itemId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyLand(_landId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyPot(_landId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyStarterPack(
      _landId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    catPrice(overrides?: CallOverrides): Promise<BigNumber>;

    landPrice(overrides?: CallOverrides): Promise<BigNumber>;

    potPrice(overrides?: CallOverrides): Promise<BigNumber>;

    soupPrice(overrides?: CallOverrides): Promise<BigNumber>;

    startPackPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Purchase(string,address,uint256)"(
      purchaseType?: null,
      purchaser?: null,
      id?: null
    ): PurchaseEventFilter;
    Purchase(
      purchaseType?: null,
      purchaser?: null,
      id?: null
    ): PurchaseEventFilter;
  };

  estimateGas: {
    buyItem(
      _itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyLand(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyPot(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyStarterPack(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    catPrice(overrides?: CallOverrides): Promise<BigNumber>;

    landPrice(overrides?: CallOverrides): Promise<BigNumber>;

    potPrice(overrides?: CallOverrides): Promise<BigNumber>;

    soupPrice(overrides?: CallOverrides): Promise<BigNumber>;

    startPackPrice(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyItem(
      _itemId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyLand(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyPot(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyStarterPack(
      _landId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    catPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    landPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    potPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    soupPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startPackPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
