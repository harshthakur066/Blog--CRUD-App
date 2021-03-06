import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);
  return (
    <View>
      <Text style={styles.title}> {blogPost.title} </Text>
      <Text style={styles.content}> {blogPost.content} </Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");
  return {
    headerRight: (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <EvilIcons name="pencil" size={40} style={{ paddingHorizontal: 10 }} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    marginVertical: 50,
  },
  content: {
    fontSize: 20,
  },
});

export default ShowScreen;
