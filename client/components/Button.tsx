import React, { ReactNode } from "react"
import{ Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

type ButtonProps = {
    onClick?: () => void;
    children: ReactNode;
}

const BaseButton = ({onClick, children}: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} bg="brand.pink" fontWeight="light">{children}</StyledButton>
    )
};

export default BaseButton;

const StyledButton = styled(Button)({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Indie Flower",
    fontSize: "30px",
    padding: "30px",
    borderRadius: "15px"
});