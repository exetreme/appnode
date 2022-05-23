import { StyleSheet, Text, View } from "react-native";
import Signup from "./screens/Signup";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Signin from "./screens/Signin";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        iniialRouteName="Signin"
        creenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" components={Signup} />
        <Stack.Screen name="Signin" components={Signin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
