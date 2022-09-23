import React, { useContext } from "react";
import BaseButton from "../../Button";
import BaseModal from "../BaseModal";
import { Text, Checkbox, Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ConnectionContext } from "../../../contexts/WalletConnection";
import Link from "next/link";
import { InteractiveMap } from "../../Map/InteractiveMap";

const MapModal = () => {
  const { accounts } = useContext(ConnectionContext);

  return (
    <BaseModal
      openButtonTitle="Continue"
      footer={
        accounts ? (
          <Link href="/marketplace">
            <BaseButton>Continue</BaseButton>
          </Link>
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
      <div style={{ height: "40vh", width: "100%" }}>
        <InteractiveMap />
      </div>
    </BaseModal>
  );
};

export default MapModal;

const EmphText = styled(Flex)({
  fontWeight: "bold",
  alignSelf: "center",
});
