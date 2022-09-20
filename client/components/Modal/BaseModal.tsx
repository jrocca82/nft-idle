import React, { ReactNode } from "react";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
} from "@chakra-ui/react";
import BaseButton from "../Button";

type ModalProps = {
  openButtonTitle: string;
  footer: ReactNode;
  title: string;
  children: ReactNode;
};

const BaseModal = ({
  children,
  openButtonTitle,
  title,
  footer
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BaseButton onClick={onOpen}>{openButtonTitle}</BaseButton>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent textAlign="center" height="80vh">
          <ModalHeader>
            <Heading
              fontWeight="light"
              fontSize="48px"
              textAlign="center"
              marginTop="30px"
            >
              {title}
            </Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent="space-between">{children}</ModalBody>

          <ModalFooter>
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BaseModal;
