import React, { useContext } from "react";
import BaseModal from "../BaseModal";
import { Text, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ConnectionContext } from "../../../contexts/WalletConnection";
import { InteractiveMap } from "../../Map/InteractiveMap";
import SuccessModal from "./SuccessModal";

const MapModal = () => {
  const { accounts } = useContext(ConnectionContext);

  return (
    <BaseModal
      openButtonTitle="Continue"
      footer={
        accounts ? (
          <SuccessModal purchaseType="a starter pack"/>
        ) : (
          <Text>Error: cannot detect wallet address</Text>
        )
      }
      title="Pick your land!"
    >
      <EmphText>
        Minting to:{" "}
        {accounts ? accounts[0] : "Error connecting wallet, please try again"}
      </EmphText>
      <div style={{ height: "35vh", width: "100%" }}>
        <InteractiveMap />
      </div>
      <EmphText>Please make sure your wallet is connected to Goerli Testnet.</EmphText>
      <EmphText>You may have to confirm the transactions in Metamask.</EmphText>
    </BaseModal>
  );
};

export default MapModal;

const EmphText = styled(Flex)({
  fontWeight: "bold",
  justifyContent: "center",
  marginBottom: "10px",
  marginTop: "10px"
});
