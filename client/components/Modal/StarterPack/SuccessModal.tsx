import React, { useContext } from "react";
import BaseButton from "../../Button";
import BaseModal from "../BaseModal";
import { Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ConnectionContext } from "../../../contexts/WalletConnection";
import Link from "next/link";
import contracts from "../../../abis/contracts.json";
import CopyText from "../../CopyAddressText";

type SuccessModalProps = {
  purchaseType: string;
};

const SuccessModal = ({ purchaseType }: SuccessModalProps) => {
  const { accounts } = useContext(ConnectionContext);

  return (
    <BaseModal
      openButtonTitle="Mint!"
      disallowCloseModal={true}
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
      <Flex textAlign="center" justifyContent="center">
        <Text mr="10px">Land Address: </Text>
        <CopyText address={true} text={contracts.goerli.Land} />
      </Flex>
      <Flex textAlign="center" justifyContent="center">
        <Text mr="10px">Pot Address: </Text>
        <CopyText address={true} text={contracts.goerli.Pot} />
      </Flex>
      <Flex textAlign="center" justifyContent="center">
        <Text mr="10px">Cats and Soup Address: </Text>
        <CopyText address={true} text={contracts.goerli.CatsAndSoup} />
      </Flex>
      <EmphText>
        You may also want to import our utility token, which you will earn
        in-game:
      </EmphText>
      <Flex textAlign="center" justifyContent="center">
        <Text mr="10px">Currency Address: </Text>
        <CopyText address={true} text={contracts.goerli.Currency} />
      </Flex>
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
