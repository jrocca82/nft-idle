import React, { useContext } from "react";
import BaseModal from "../BaseModal";
import { Text, Checkbox, Flex } from "@chakra-ui/react";
import { ConnectionContext } from "../../../contexts/WalletConnection";
import MapModal from "./MapModal";

const StarterPackModal = () => {
  const { accounts } = useContext(ConnectionContext);

  return (
    <BaseModal
      openButtonTitle="Mint a Free Starter Pack!"
      footer={
        accounts ? (
          <MapModal />
        ) : (
          <Text>Error: cannot detect wallet address</Text>
        )
      }
      title="Mint a free starter pack!"
    >
      <Flex style={{ alignSelf: "center" }}>
        <Text>
          Your starter pack includes a land token (ERC721), pot token (ERC20),
          cat token (ERC1155), and soup token (ERC1155), minted to one address.
          Your tokens will automatically be minted to your connected address.
          Minting a starter pack creates an on-chain account for this address.
          We do not collect any user details beyond the token balances and
          wallet addresses required to play the game. Please confirm this is the
          address you would like to create an account with:
        </Text>
        <Flex style={{ fontWeight: "bold", alignSelf: "center" }}>
          {accounts ? accounts[0] : "Error connecting wallet, please try again"}
        </Flex>
        <Flex
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Checkbox defaultChecked colorScheme="green">
            <Text>Yes, this is the address I would like to use.</Text>
          </Checkbox>
        </Flex>
        <Flex style={{ fontWeight: "bold", alignSelf: "center" }}>
          If your address is incorrect, please exit this modal, disconnect your
          wallet in Metamask, and refresh the page to reconnect.
        </Flex>
      </Flex>
    </BaseModal>
  );
};

export default StarterPackModal;
