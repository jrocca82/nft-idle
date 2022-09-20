import { ethers, providers } from "ethers";
import React, {
  ReactNode,
  createContext,
  useState,
  useCallback,
} from "react";
import { toast } from "react-toastify";

interface IConnectionContext {
  ethersProvider: ethers.providers.Web3Provider | undefined;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  accounts: string[] | undefined;
}

export const ConnectionContext = createContext({} as IConnectionContext);

export const ConnectionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [ethersProvider, setEthersProvider] =
    useState<ethers.providers.Web3Provider>();
  const [accounts, setAccounts] = useState<string[]>();

  const connectWallet = useCallback(async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);

    const accounts = await provider.listAccounts();
    setAccounts(accounts)

    setEthersProvider(provider);
  }, []);

  // set states to initial setting when user disconnect from wallet / auth0
  const disconnectWallet = async () => {
    setEthersProvider(undefined);
  };

  return (
    <ConnectionContext.Provider
      value={{
        accounts,
        ethersProvider,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </ConnectionContext.Provider>
  );
};
