import { Box, Flex, Text, Button, Input, VStack, Heading, Image } from "@chakra-ui/react";
import { FaSearch, FaMapMarkedAlt, FaMobileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" p={4}>
      <VStack spacing={8} width="full" maxW="md">
        <Box textAlign="center">
          <Heading mb={2}>Mobile Tracker</Heading>
          <Text fontSize="lg">Locate your mobile device easily.</Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB0cmFja2luZ3xlbnwwfHx8fDE3MTM1MjI5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Input placeholder="Enter mobile number" variant="filled" mb={2} />
        <Button leftIcon={<FaSearch />} colorScheme="teal" size="lg" w="full">
          Track Mobile
        </Button>
        <Flex direction="column" align="center" mt={4}>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="blue" variant="outline" w="full">
            View Map
          </Button>
          <Button leftIcon={<FaMobileAlt />} colorScheme="purple" variant="outline" w="full" mt={2}>
            Device Info
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
