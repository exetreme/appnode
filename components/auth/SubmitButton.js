import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

const SubmitButton = ({ title, handleSubmit, loading }) => (
  <TouchableOpacity
    onPress={handleSubmit}
    style={{
      backgroundColor: "red",
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      borderRadius: 10,
      marginHorizontal: 10,
    }}
  >
    <Text>{loading ? "plese wait..." : title}</Text>
  </TouchableOpacity>
);

export default SubmitButton;
