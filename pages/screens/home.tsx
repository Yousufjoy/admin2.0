import {
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Container,
  Box,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/navbar";
import ProRentCard from "../components/proCard";

const api = axios.create({
  baseURL: `http://localhost:5001/api/post`,
});

export default function HomePage() {
  const [type, setType] = useState("");
  const [posts, setPosts] = useState([]);

  const handleClick = (title: string) => {
    setType(title);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    let data = await api.get("/").then(({ data }) => data);
    setPosts(data);
  };

  const Post = ({ posts }) => {
    return (
      <SimpleGrid columns={2} pl={15} pr={15} m={10} spacing={3}>
        {posts.map((posts) => (
          <ProRentCard
            amount={posts.price}
            location={posts.location}
            type={posts.type}
            title={posts.name}
            bed={posts.bed}
            bath={posts.bath}
            area={posts.area}
            phone={posts.number}
            image={
              "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
            }
            id={posts.id}
            approval_status={posts.approval_status}
            email={posts.email}
          ></ProRentCard>
        ))}
      </SimpleGrid>
    );
  };
  return (
    <>
      <Navbar id={undefined} />
      <Container
        bgImage="url('https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/rentify%20reloaded%2F810-2%20%5BConverted%5D.png?alt=media&token=fecd0b33-c04d-4304-b9c7-f1643408f57c')"
        bgSize={"465px"}
        maxW={"full"}
        maxH={"45vh"}
      >
        <Flex alignItems={"center"}>
          <Box
            bgColor={useColorModeValue("white", "#1a202c")}
            borderRadius={10}
            boxShadow={"lg"}
            justifyContent={"center"}
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            flexGrow={1}
            h={100}
            p={4}
            m={12}
          >
            <HStack p={10} justifyContent={"space-between"} flex={1}>
              <Heading
                textAlign="center"
                textColor={useColorModeValue("black", "white")}
              >
                Admin Panel
              </Heading>
            </HStack>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              bgColor="green.200"
              textColor="green"
              boxShadow="0 0px 17px #9ae6b4"
              _hover={{
                bg: "green.100",
              }}
            >
              Load Post
            </Button>
          </Box>
        </Flex>
      </Container>
      <Post posts={posts} />
    </>
  );
}
