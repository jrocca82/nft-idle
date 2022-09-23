import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Text } from "@chakra-ui/react";
import truncateEthAddress from "truncate-eth-address";

type CopyTextProps = {
    text: string;
    address: boolean;
}

const CopyText = ({text, address}: CopyTextProps) => {
    const [_, setCopyText] = useState<{copiedText: string}>({copiedText: ""});
  return (
    <CopyToClipboard
      text={text}
      onCopy={() => setCopyText({ copiedText: text })}
    >
        <Text as="u" cursor={"pointer"}>{address ? truncateEthAddress(text) : text}</Text>
    </CopyToClipboard>
  );
};

export default CopyText
