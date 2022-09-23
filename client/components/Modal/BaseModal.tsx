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
  disallowCloseModal?: boolean;
};

const BaseModal = ({
  children,
  openButtonTitle,
  title,
  footer,
  disallowCloseModal
}: ModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BaseButton onClick={onOpen}>{openButtonTitle}</BaseButton>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl" closeOnOverlayClick={disallowCloseModal ? false : true}>
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
          {disallowCloseModal ? null : <ModalCloseButton />}
          <ModalBody justifyContent="space-between">{children}</ModalBody>

          <ModalFooter flexDirection="column">
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BaseModal;
