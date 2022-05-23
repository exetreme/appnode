import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";
import SubmitButton from "../components/auth/SubmitButton";
import UserInput from "../components/auth/UserInput";
import axios from "axios";
import CircleLogo from "../components/auth/CircleLogo";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signin = ({ navigation }) => {
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

    try {
      const { data } = await axios.post("http://localhost:8000/api/signin", {
        name,
        email,
        password,
      });
      console.log("SIGN IN SUCCES =>", data);
      alert("sign in successful");
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
          SignIN
        </Text>

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
          title="sign In"
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Text>
          Not yet registered?
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{
              color: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Sign Up
          </Text>
        </Text>
        <Text
          style={{ marginTop: 10, justifyContent: "center", color: "orange" }}
        >
          Forgot Password
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
};
export default Signin;
