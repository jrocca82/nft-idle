import React, { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

const BaseButton = ({ onClick, children }: ButtonProps) => {
  return (
    <Button
      onClick={onClick}
      bg="brand.pink"
      fontWeight="light"
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Indie Flower",
        fontSize: "30px",
        padding: "30px",
        borderRadius: "15px",
      }}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
