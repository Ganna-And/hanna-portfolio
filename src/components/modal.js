import {
    Modal,
    ModalOverlay,
    Button,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  

 export const ModalPage = ({onOpen, isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{margin:'5rem'}}>
            <h3 style={{fontWeight:'700'}}>WhatsApp number</h3>
            <p>+971569102990</p>
            <hr />
            <h3 style={{fontWeight:'700'}}>Email adress:</h3>
            <p>ganna.andrushko@gmail.com</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  