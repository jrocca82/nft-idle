import React from "react";
import styled from "@emotion/styled";
import { Text, Flex, Heading } from "@chakra-ui/react";

type SectionProps = {
  sectionTitle: string;
  children: React.ReactNode;
  bgColor: string;
  width: string;
};

const Section = ({ sectionTitle, children, bgColor, width }: SectionProps) => {
  return (
    <SectionWrapper bg={bgColor} width={width}>
      <Heading fontSize="24px" fontWeight="light" textAlign="center" textDecor="underline">
        {sectionTitle}
      </Heading>
      {children}
    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled(Flex)({
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "stretch",
  padding: "20px",
  borderRadius: "30px",
});
