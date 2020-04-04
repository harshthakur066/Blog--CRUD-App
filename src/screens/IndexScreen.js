import React, { useContext } from "react";
import { Text, StyleSheet, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import { FlatList } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext);
  return (
    <>
      <Text>Index View</Text>
      <Button title="Add Blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text> {item.title} </Text>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
