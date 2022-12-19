import React from "react";
import { useState } from "react";
import {
  Text,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  Button,
  useToast,
  Box
} from "@chakra-ui/react";
import axios from "axios";
import LoginUser from "./LoginUser";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleCreateUser = () => {
    setLoading(true);
    axios
      .post("https://dull-tan-antelope-tux.cyclic.app/signUp", formData)
      .then((res) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Email already registered.",
          description: "Please use another email address.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      });
  };

  return (
    <Flex gap="30px">
    <GridItem w="30%" boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px" ml="300px" mt="10px" paddingX="40px" paddingY="40px">
      <Text as="b" color="#444" fontSize="2xl">
        Create Account
      </Text>
      <VStack paddingY="20px" align="left" spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={formData.name}
            placeholder="Name"
            borderRadius="3px"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Email"
            borderRadius="3px"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Flex justifyContent="space-between">
          <FormControl isRequired w="45%">
            <FormLabel>Create Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => handleChange(e)}
              value={formData.password}
              borderRadius="3px"
            />
          </FormControl>
          <FormControl isRequired w="45%">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              placeholder="Confirm Password"
              type="password"
              borderRadius="3px"
            />
          </FormControl>
        </Flex>
        <Button
          colorScheme="blue"
          size="md"
          borderRadius="3px"
          isLoading={loading}
          loadingText="Submitting"
          onClick={handleCreateUser}
        >
          Create Account
        </Button>
      </VStack>
    </GridItem>
    <LoginUser/>
    </Flex>
  );
};

export default CreateUser;
