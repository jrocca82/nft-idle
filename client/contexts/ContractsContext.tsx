import { ethers, providers } from "ethers";
import React, {
  ReactNode,
  createContext,
  useContext,
} from "react";
import contracts from "../abis/contracts.json";
import Land from "../abis/Land.json";
import Pot from "../abis/Pot.json";
import Currency from "../abis/Currency.json";
import CatsAndSoup from "../abis/CatsAndSoup.json";
import Vault from "../abis/Vault.json";
import Marketplace from "../abis/Marketplace.json";
import { ConnectionContext } from "./WalletConnection";

interface IContractContext {
  landContract: ethers.Contract;
  potContract: ethers.Contract;
  catsAndSoupContract: ethers.Contract;
  currencyContract: ethers.Contract;
  vaultContract: ethers.Contract;
  marketplaceContract: ethers.Contract;
}

export const ContractContext = createContext({} as IContractContext);

export const ConnectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { ethersProvider } = useContext(ConnectionContext);

  const landContract = new ethers.Contract(
    contracts.goerli.Land,
    Land.abi,
    ethersProvider?.getSigner()
  );

  const potContract = new ethers.Contract(
    contracts.goerli.Pot,
    Pot.abi,
    ethersProvider?.getSigner()
  );

  const catsAndSoupContract = new ethers.Contract(
    contracts.goerli.CatsAndSoup,
    CatsAndSoup.abi,
    ethersProvider?.getSigner()
  );

  const currencyContract = new ethers.Contract(
    contracts.goerli.Currency,
    Currency.abi,
    ethersProvider?.getSigner()
  );

  const vaultContract = new ethers.Contract(
    contracts.goerli.Vault,
    Vault.abi,
    ethersProvider?.getSigner()
  );

  const marketplaceContract = new ethers.Contract(
    contracts.goerli.Marketplace,
    Marketplace.abi,
    ethersProvider?.getSigner()
  );

  return (
    <ContractContext.Provider
      value={{
        landContract,
        potContract,
        catsAndSoupContract,
        currencyContract,
        vaultContract,
        marketplaceContract,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
