import React, { useContext } from "react";
import { Text, StyleSheet, Button, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Context as BlogContext } from "../context/BlogContext";
import {
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

const IndexScreen = () => {
  const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>Index View</Text>
      <Button title="Add Blog" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.title}> {item.title} </Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
