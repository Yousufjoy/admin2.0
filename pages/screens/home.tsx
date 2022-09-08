import {
  Center,
  Flex,
  Heading,
  HStack,
  VStack,
  Wrap,
  WrapItem,
  Text,
  Stack,
  Container,
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
    console.log(posts);
    return (
      <Flex flex={1} flexDirection={"row"}>
        <Wrap>
          {posts.map((posts) => (
            <WrapItem>
              <ProRentCard
                amount={posts.price}
                location={posts.location}
                type={posts.type}
                title={posts.name}
                bed={posts.beds}
                bath={posts.baths}
                area={posts.area}
                phone={posts.number}
                image={
                  "https://firebasestorage.googleapis.com/v0/b/rentify-4f59b.appspot.com/o/colonial-style-house-night-scene.jpg?alt=media&token=6bfee092-54bc-4c68-904b-5d7af87a78c0"
                }
                id={posts.id}
                children={undefined}
                email={posts.email}
              ></ProRentCard>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>
    );
  };
  return (
    <>
      <Navbar id={undefined} />
      <VStack justify="center" pl={170} pr={170} m={10}>
        <Post posts={posts} />
      </VStack>
    </>
  );
}
