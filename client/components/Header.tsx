import React, { useContext, useEffect } from "react";
import BaseButton from "./Button";
import styled from "@emotion/styled";
import { Text, Flex, Heading } from "@chakra-ui/react";
import { ConnectionContext } from "../contexts/WalletConnection";
import Link from "next/link";
import truncateEthAddress from 'truncate-eth-address'

type HeaderProps = {
  title: string;
  main?: boolean;
  bg?: string
};

const Header = ({ title, main, bg }: HeaderProps) => {
  const { accounts, connectWallet } = useContext(ConnectionContext);


  return (
    <HeaderWrapper bg={bg}>
      <WalletAddress>
        {accounts ? `Connected to: ${truncateEthAddress(accounts[0])}` : "Not Connected"}
      </WalletAddress>
      <Heading fontSize="48px" fontWeight="light" paddingBottom={main ? "auto" : "50px"}>
        {title}
      </Heading>
      {main ? (
        <>
          <BodyText>
            To an NFT idle game that is entirely on-chain-- from the metaverse
            game-map, ERC20 tokens, and ERC721/ERC1155 collectibles.
          </BodyText>
          {accounts ? (
            <Link href="/marketplace">
            <BaseButton>Get Started!</BaseButton>
          </Link>
          ) : (
            <BaseButton onClick={connectWallet}>Connect Wallet</BaseButton>
          )}
        </>
      ) : null}
    </HeaderWrapper>
  );
};
export default Header;

const HeaderWrapper = styled(Flex)({
  width: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center"
});

const WalletAddress = styled(Text)({
  marginTop: "15px",
  width: "85%",
  textAlign: "right"
});

const BodyText = styled(Text)({
  fontSize: "24px",
  textAlign: "center",
  width: "70%",
  marginTop: "20px",
  marginBottom: "20px",
});
