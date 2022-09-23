import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import styled from "@emotion/styled";
import { Text, Flex } from "@chakra-ui/react";
import BaseButton from "../components/Button";
import { useContext } from "react";
import { ConnectionContext } from "../contexts/WalletConnection";
import StarterPackModal from "../components/Modal/StarterPack/StarterPackModal";
import CopyText from "../components/CopyAddressText";
import contracts from "../abis/contracts.json";
import truncateEthAddress from "truncate-eth-address";

const Marketplace: NextPage = () => {
  const { accounts, connectWallet } = useContext(ConnectionContext);

  return (
    <PageWrapper>
      <Head>
        <title>NFT Idle Game</title>
        <meta name="description" content="NFT Idle Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Marketplace" bg="brand.yellow" />
      <HeaderText>
        In the cosy metaverse of NFT Idle Game, there are only three things--
        cats, soup, and the pots they make them in. This relaxing world is made
        up of ERC721 “Land” tokens, upon which our collectible ERC1155 cats
        live.
      </HeaderText>
      <HeaderText>
        As your cat roams its designated land, it stirs up delicious,
        collectible ERC1155 soup in a sturdy ERC20 pot, earning you ERC20 coins,
        which you can then spend on more items in our marketplace.
      </HeaderText>
      <HeaderText>
        All transactions must go through our{" "}
        <a
          target={"_blank"}
          href={`https://goerli.etherscan.io/address/${contracts.goerli.Marketplace}#code`}
        >
          <Text as="u" cursor="pointer">
            marketplace contract
          </Text>
        </a>{" "}
        and are recorded on-chain.
      </HeaderText>
      <HeaderText>
        NFT Idle Game was inspired by the off-chain game{" "}
        <a
          target={"_blank"}
          href="https://www.google.com/search?q=cats+and+soup&oq=cats+and+soup&aqs=chrome.0.69i59j69i57j0i271l2j69i59j69i60l3.1436j0j7&sourceid=chrome&ie=UTF-8"
        >
          <Text cursor="pointer" as="u">
            Cats and Soup
          </Text>
        </a>
        .
      </HeaderText>
      <ButtonWrapper>
        {accounts ? (
          <StarterPackModal />
        ) : (
          <BaseButton onClick={connectWallet}>
            {accounts ? "Mint a Free Starter Pack!" : "Connect Wallet"}
          </BaseButton>
        )}
      </ButtonWrapper>
      <Sections paddingX="50px">
        <Section sectionTitle="Land: ERC721" bgColor="brand.green" width="30%">
          <SectionText>
            The core of the NFT Idle Game metaverse is the land. Each land is a
            unique ERC721 collectible token (NFT).. When it contains a pot, cat,
            and soup, it can earn you coins to buy more tokens!
          </SectionText>
          <SectionText>
            Contract address:{" "}
            <a
              target={"_blank"}
              href={`https://goerli.etherscan.io/address/${contracts.goerli.Land}#code`}
            >
              <Text as="u" cursor="pointer">{truncateEthAddress(contracts.goerli.Land)}</Text>
            </a>
          </SectionText>
        </Section>
        <Section sectionTitle="Pot: ERC20" bgColor="brand.green" width="30%">
          <SectionText>
            Before your cat can start making soup, you need a pot to make it in!
            Each pot is a non-devisible ERC20 token which can be assigned to
            your land so it is ready for your cat to make soup and earn you
            coins!
          </SectionText>
          <SectionText>
            Contract address:{" "}
            <a
              target={"_blank"}
              href={`https://goerli.etherscan.io/address/${contracts.goerli.Pot}#code`}
            >
              <Text as="u" cursor="pointer">{truncateEthAddress(contracts.goerli.Pot)}</Text>
            </a>
          </SectionText>
        </Section>
        <Section
          sectionTitle="Other: ERC1155"
          bgColor="brand.green"
          width="30%"
        >
          <SectionText>
            By far the best and most interesting part of the game is the cats
            and soup! Our ERC1155 is a token contract that identifies each type
            of cat or soup with an id number. Once you have a land, pot, cat,
            and soup, you’re ready to earn coins!
          </SectionText>
          <SectionText>
            Contract address:{" "}
            <a
              target={"_blank"}
              href={`https://goerli.etherscan.io/address/${contracts.goerli.CatsAndSoup}#code`}
            >
              <Text as="u" cursor="pointer">{truncateEthAddress(contracts.goerli.CatsAndSoup)}</Text>
            </a>
          </SectionText>
        </Section>
      </Sections>
    </PageWrapper>
  );
};

export default Marketplace;

const PageWrapper = styled(Flex)({
  flexDirection: "column",
});

const Sections = styled(Flex)({
  marginTop: "15px",
  flexDirection: "row",
  paddingTop: "50px",
  justifyContent: "space-around",
  borderTop: "1px black solid",
});

const HeaderText = styled(Text)({
  marginTop: "20px",
  width: "80%",
  alignSelf: "center",
});

const SectionText = styled(Text)({
  marginTop: "15px",
  textAlign: "center",
});

const ButtonWrapper = styled(Flex)({
  alignSelf: "flex-end",
  marginRight: "100px",
  marginTop: "-50px",
});
