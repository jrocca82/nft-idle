import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

type SectionProps = {
  sectionTitle: string;
  children: React.ReactNode;
  bgColor: string;
  width: string;
};

const Section = ({ sectionTitle, children, bgColor, width }: SectionProps) => {
  return (
    <Flex style={{
      flexDirection: "column",
      justifyContent: "space-between",
      alignSelf: "stretch",
      padding: "20px",
      borderRadius: "30px",}} bg={bgColor} width={width}>
      <Heading fontSize="24px" fontWeight="light" textAlign="center" textDecor="underline">
        {sectionTitle}
      </Heading>
      {children}
    </Flex>
  );
};

export default Section;
