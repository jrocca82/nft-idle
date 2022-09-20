import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Section from "../components/Section";
import styled from "@emotion/styled";
import { Text, Flex, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {

  return (
    <PageWrapper>
      <Head>
        <title>NFT Idle Game</title>
        <meta name="description" content="NFT Idle Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Welcome!" main={true}/>
      <Sections>
        <Section sectionTitle="About the Game" bgColor="brand.green" width="45%">
          <Text>
            In the cosy metaverse of NFT Idle Game, there are only three
            things-- cats, soup, and the pots they make them in. This relaxing
            world is made up of ERC721 “Land” tokens, upon which our collectible
            ERC1155 cats live.
          </Text>
          <Text>
            As your cat roams its designated land, it stirs up delicious,
            collectible ERC1155 soup in a sturdy ERC20 pot, earning you ERC20
            coins, which you can then spend on more items in our marketplace.
          </Text>
          <Text>NFT Idle Game was inspired by the off-chain game Cats and Soup.</Text>
        </Section>
        <Section sectionTitle="About the Developer" bgColor="brand.yellow" width="45%">
          <Text>
            This game was developed at Labrys, located in Brisbane, Australia,
            by one of their software engineers, Jo Rocca, as a personal
            development project.
          </Text>
          <Text>
            Jo Rocca is proud of this game, as well as everything that it taught
            her, preparing her for bigger and better blockchain projects in the
            future.
          </Text>
          <Text>
            Jo Rocca would like to thank Labrys for giving her the space to
            develop her game, as well as Lorenzo Fontoura, her partner and
            mentor, whose patience and guidance has helped her grow to the point
            that she was able to design, develop, and deploy this game (almost)
            single-handedly.
          </Text>
        </Section>
      </Sections>
    </PageWrapper>
  );
};

export default Home;

const PageWrapper = styled(Flex)({
  flexDirection: "column"
})

const Sections = styled(Flex)({
  flexDirection: "row",
  marginTop: "70px",
  justifyContent: "space-around",
  height: "350px",
});
