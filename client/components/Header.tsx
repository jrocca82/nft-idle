import React, { useContext } from "react";
import BaseButton from "./Button";
import { Text, Flex, Heading } from "@chakra-ui/react";
import { ConnectionContext } from "../contexts/WalletConnection";
import Link from "next/link";
import truncateEthAddress from "truncate-eth-address";

type HeaderProps = {
  title: string;
  main?: boolean;
  bg?: string;
};

const Header = ({ title, main, bg }: HeaderProps) => {
  const { accounts, connectWallet } = useContext(ConnectionContext);

  return (
    <Flex
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      bg={bg}
    >
      <Text style={{ marginTop: "15px", width: "85%", textAlign: "right" }}>
        {accounts
          ? `Connected to: ${truncateEthAddress(accounts[0])}`
          : "Not Connected"}
      </Text>
      <Heading
        fontSize="48px"
        fontWeight="light"
        paddingBottom={main ? "auto" : "50px"}
      >
        {title}
      </Heading>
      {main ? (
        <>
          <Text
            style={{
              fontSize: "24px",
              textAlign: "center",
              width: "70%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            To an NFT idle game that is entirely on-chain-- from the metaverse
            game-map, ERC20 tokens, and ERC721/ERC1155 collectibles.
          </Text>
          {accounts ? (
            <Link href="/marketplace">
              <BaseButton>Get Started!</BaseButton>
            </Link>
          ) : (
            <BaseButton onClick={connectWallet}>Connect Wallet</BaseButton>
          )}
        </>
      ) : null}
    </Flex>
  );
};
export default Header;
