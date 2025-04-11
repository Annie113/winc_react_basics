import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

const BackButton = ({ onClick, label = "Back" }) => (
  <Button
    onClick={onClick}
    mb={4}
    variant="outline"
    borderWidth="2px"
    borderColor="#a9c49e"
    color="#a9c49e"
    bg="#fff"
    borderRadius="md"
    leftIcon={<ArrowBackIcon />}
    _hover={{
      bg: "#457632",
      color: "#fff",
      borderColor: "transparent", 
    }}
    _focus={{
      boxShadow: "0 0 0 2px #a9c49e",
      borderColor: "#a9c49e",
    }}
  >
    {label}
  </Button>
);

export default BackButton;
