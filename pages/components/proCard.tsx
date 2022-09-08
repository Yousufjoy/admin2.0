import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  Box,
  Tag,
  TagLabel,
  TagRightIcon,
} from "@chakra-ui/react";
import { FaBed, FaBath, FaBorderAll } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import router from "next/router";
import axios from "axios";
import { IoLocationSharp } from "react-icons/io5";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});
export default function ProRentCard({
  amount,
  location,
  type,
  title,
  bed,
  bath,
  area,
  image,
  id,
  phone,
  children,
  email,
}) {
  var isBooked: boolean;
  const [bookId, setId] = useState("");
  const [Uname, setName] = useState("");
  const [Uemail, setEmail] = useState("");
  const [Uphone, setPhone] = useState("");
  const [Ulocation, setLocation] = useState("");
  const [Uaddress, setAddress] = useState("");
  const [Uprice, setPrice] = useState("");
  const [Uarea, setArea] = useState("");
  const [Ubeds, setBeds] = useState("");
  const [Ubaths, setBaths] = useState("");
  const [Udescription, setDescription] = useState("");
  const [Utype, setType] = useState("");
  const [Ucstatus, setCstatus] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    bookInfo();
  }, []);

  const PostDelete = async (post_id: any) => {
    let data = await api.delete(`/${post_id}`);
  };

  const bookInfo = async () => {
    console.log(Uname);
  };
  return (
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={"70%"}
        height={"100%"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        padding={4}
      >
        <Center py={6}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            w={"100%"}
            height={"100%"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            padding={4}
            as={"button"}
            onClick={() => {
              router.push({
                pathname: "/components/ProCardDetails",
                query: id,
              });
            }}
          >
            <Stack direction={{ base: "column", md: "row" }}>
              <Image
                objectFit="cover"
                maxH={"30%"}
                maxW={"50%"}
                borderRadius={"lg"}
                src={image}
              />
              <Stack
                flex={1}
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                p={1}
                pl={10}
              >
                <Stack direction="row" alignItems="baseline">
                  <Text
                    fontSize="md"
                    fontWeight="bold"
                    textAlign={"match-parent"}
                  >
                    BDT
                  </Text>
                  <Text fontSize="4xl" fontWeight="bold">
                    {amount}
                  </Text>
                </Stack>
                <Tag size={"lg"} variant="outline" colorScheme="blue">
                  <TagLabel>{location}</TagLabel>
                  <TagRightIcon boxSize="12px" as={IoLocationSharp} />
                </Tag>
                <Badge fontSize="sm" colorScheme="blue" variant={"solid"}>
                  {type}
                </Badge>
                <Heading
                  fontSize={20}
                  overflow={"hidden"}
                  orientation={"horizontal"}
                  noOfLines={1}
                  textAlign={"start"}
                >
                  {title}
                </Heading>
                <HStack spacing={7} pt={2} alignItems={"baseline"}>
                  <HStack>
                    <FaBed size={20} />
                    <Text>{bed}</Text>
                  </HStack>
                  <HStack>
                    <FaBath size={20} />
                    <Text>{bath}</Text>
                  </HStack>
                  <HStack>
                    <FaBorderAll size={20} />
                    <Text>{area}</Text>
                  </HStack>
                </HStack>
                <Flex
                  justifyContent={"flex-end"}
                  flexDirection={"column"}
                  flex={1}
                >
                  <HStack justifyContent={"start"}>{children}</HStack>
                </Flex>
              </Stack>
              {bookId === id ? (
                <Badge colorScheme="green" h={5}>
                  Booked
                </Badge>
              ) : (
                ""
              )}
            </Stack>
          </Box>
        </Center>
        <Center>
          <Stack direction={"row"} flex={1}>
            <Button
              w={"100%"}
              fontSize={"sm"}
              fontWeight={400}
              color="white"
              variant={"solid"}
              bg="gray.200"
              textColor={"black"}
              style={{
                fontWeight: "bold",
              }}
              _hover={{
                bg: "red.400",
                textColor: "white",
              }}
              onClick={() => {
                PostDelete(id);
                console.log(id);
                // window.location.reload();
              }}
            >
              Reject
            </Button>
          </Stack>
        </Center>
      </Stack>
    </Center>
  );
}
