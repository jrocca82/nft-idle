import React, { useContext } from "react";
import BaseModal from "../BaseModal";
import { Text, Flex } from "@chakra-ui/react";
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
          <SuccessModal purchaseType="a starter pack" />
        ) : (
          <Text>Error: cannot detect wallet address</Text>
        )
      }
      title="Pick your land!"
    >
      <Flex
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Minting to:{" "}
        {accounts ? accounts[0] : "Error connecting wallet, please try again"}
      </Flex>
      <div style={{ height: "35vh", width: "100%" }}>
        <InteractiveMap />
      </div>
      <Flex
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        Please make sure your wallet is connected to Goerli Testnet.
      </Flex>
      <Flex
        style={{
          fontWeight: "bold",
          justifyContent: "center",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        You may have to confirm the transactions in Metamask.
      </Flex>
    </BaseModal>
  );
};

export default MapModal;
