import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import SubmitButton from "../components/auth/SubmitButton";
import UserInput from "../components/auth/UserInput";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("all fields are required");
      setLoading(false);
      return;
    }
    console.log("sing up reques=>", name, email, password);
    try {
      const { data } = await axios.post("http://localhost:8000/api/signup", {
        name,
        email,
        password,
      });
      console.log("SIGN IN SUCCES =>", data);
      alert("sign up successful");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 34,
          color: "red",
          marginLeft: 100,
        }}
      >
        SignUp
      </Text>
      <UserInput
        name="Name"
        value={name}
        setValue={setName}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <UserInput
        name="Mail"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <SubmitButton
        title="sign up"
        handleSubmit={handleSubmit}
        loading={loading}
      />
      <Text>{JSON.stringify({ name, email, password }, null, 4)}</Text>
    </View>
  );
};
export default Signup;
