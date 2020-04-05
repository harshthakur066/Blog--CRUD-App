import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";
import { TextInput } from "react-native-gesture-handler";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //   const { addBlogPost } = useContext(Context);
  return (
    <View>
      <Text style={styles.lable}>Title:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.lable}>Content:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Content"
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      {/* <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lable: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default EditScreen;
