import React from "react";
import { View, Image } from "react-native";

const CircleLogo = () => (
  <View style={{ justifyContent: "center", alignItems: "center" }}>
    <Image
      source={require("../../assets/icon.png")}
      style={{ width: 20, height: 20 }}
    />
  </View>
);

export default CircleLogo;
