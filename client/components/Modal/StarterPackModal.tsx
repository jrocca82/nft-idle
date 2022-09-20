import React, { useContext } from "react";
import BaseButton from "../Button";
import BaseModal from "./BaseModal";
import { Text, Checkbox, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ConnectionContext } from "../../contexts/WalletConnection";
import Link from "next/link";

const StarterPackModal = () => {
  const { accounts } = useContext(ConnectionContext);

  const mintStarterPack = () => {

  };

  return (
    <BaseModal
      openButtonTitle="Mint a Free Starter Pack!"
      footer={
        accounts ? (
          <Link href="/marketplace"><BaseButton>Continue</BaseButton></Link>
          
        ) : (
          <Text>Error: cannot detect wallet address</Text>
        )
      }
      title="Mint a free starter pack!"
    >
      <ContentWrapper>
        <Text>
          Your starter pack includes a land token (ERC721), pot token (ERC20),
          cat token (ERC1155), and soup token (ERC1155), minted to one address.
          Your tokens will automatically be minted to your connected address.
          Minting a starter pack creates an on-chain account for this address.
          We do not collect any user details beyond the token balances and
          wallet addresses required to play the game. Please confirm this is the
          address you would like to create an account with:
        </Text>
        <EmphText>
          {accounts ? accounts[0] : "Error connecting wallet, please try again"}
        </EmphText>
        <CheckWrapper>
        <Checkbox defaultChecked colorScheme="green">
            <Text>Yes, this is the address I would like to use.</Text>
        </Checkbox>
        </CheckWrapper>
        <EmphText>
          If your address is incorrect, please exit this modal, disconnect your
          wallet in Metamask, and refresh the page to reconnect.
        </EmphText>
      </ContentWrapper>
    </BaseModal>
  );
};

export default StarterPackModal;

const ContentWrapper = styled(Flex)({
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
});

const CheckWrapper = styled(Flex)({
    alignSelf: "center"
});

const EmphText = styled(Flex)({
    fontWeight: "bold",
    alignSelf: "center"
})
