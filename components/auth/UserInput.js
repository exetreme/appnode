import React from "react";
import { Text, View, TextInput } from "react-native";

const UserInput = ({
  name,
  value,
  setValue,
  autoCapitalize = "none",
  keyboardType = "default",
  secureTextEntry = false,
}) => {
  return (
    <View style={{ marginHorizontal: 24 }}>
      <Text>{name}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={{
          borderBottomWidth: 0.5,
          height: 48,
          marginBottom: 30,
          borderBottomColor: "green",
        }}
        value={value}
        onChangeText={(text) => setValue(text)}
      ></TextInput>
    </View>
  );
};
export default UserInput;
