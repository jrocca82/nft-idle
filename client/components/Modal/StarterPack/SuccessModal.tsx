import React, { useContext } from "react";
import BaseButton from "../../Button";
import BaseModal from "../BaseModal";
import { Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ConnectionContext } from "../../../contexts/WalletConnection";
import Link from "next/link";
import * as addresses from "../../../abis/contracts.json";
import truncateEthAddress from 'truncate-eth-address'

type SuccessModalProps = {
  purchaseType: string;
};

const SuccessModal = ({ purchaseType }: SuccessModalProps) => {
  const { accounts } = useContext(ConnectionContext);

  return (
    <BaseModal
      openButtonTitle="Mint!"
      footer={
        accounts ? (
          <>
            <Link href="/">
              <BaseButton>Go to Map</BaseButton>
            </Link>
            <div style={{ height: "15px" }} />
            <Link href="/">
              <BaseButton>Go to Home Page</BaseButton>
            </Link>
            <div style={{ height: "100px" }} />
          </>
        ) : (
          <Text>Error: cannot detect wallet address</Text>
        )
      }
      title="Success!"
    >
      <Text>You have minted {purchaseType} to:</Text>
      <EmphText>
        {accounts ? accounts[0] : "Error connecting wallet, please try again"}
      </EmphText>
      <Text>You may have to import the tokens to see them in your wallet:</Text>
      <Text>Land Token Address: {truncateEthAddress(addresses.goerli.Land)}</Text>
      <Text>Pot Address:{truncateEthAddress(addresses.goerli.Pot)}</Text>
      <Text>Cats And Soup Address:{truncateEthAddress(addresses.goerli.CatsAndSoup)}</Text>
      <EmphText>You may also want to import our utility token, which you will earn in-game:</EmphText>
      <Text>Currency Address: {truncateEthAddress(addresses.goerli.Currency)}</Text>
    </BaseModal>
  );
};

export default SuccessModal;

const EmphText = styled(Flex)({
  fontWeight: "bold",
  justifyContent: "center",
  marginTop: "10px",
  marginBottom: "10px",
});
