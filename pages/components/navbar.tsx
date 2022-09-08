import { ReactNode, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";

export default function NavBar({ id }) {
  const querystring = require("querystring");
  const [name, setName] = useState("");
  const u_id = querystring.stringify(id).replace(/=$|=(?=&)/g, "");

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {};
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={useColorModeValue("white.100", "white.900")}
        px={30}
        boxShadow={"xl"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Image
            alt={"Logo"}
            objectFit={"contain"}
            h={10}
            w={100}
            src={
              "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/Asset%208.png?alt=media&token=0b442e59-df26-485a-acf2-87930906e0d0"
            }
          />

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{name}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
