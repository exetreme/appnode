import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import SubmitButton from "../components/auth/SubmitButton";
import UserInput from "../components/auth/UserInput";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //console.log("NAVIGATION->", navigation);

  const handleSubmit = async ({ navigator }) => {
    setLoading(true);
    if (!name || !email || !password) {
      alert("all fields are required");
      setLoading(false);
      return;
    }

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
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View style={{ marginVertical: 100 }}>
        <CircleLogo />
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
        <Text>
          Already Joined?
          <Text
            onPress={() => navigation.navigate("Signin")}
            style={{ color: "red" }}
          >
            {" "}
            Sign In
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Signup;
