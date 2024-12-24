import { ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
const BgImage = require("@/assets/bg.jpg");
import Navigator from "@/components/Navigator";
import Buttons from "@/components/Buttons";

const HomeScreen = () => {
  return (
    <ImageBackground source={BgImage} style={styles.view}>
      <Buttons />
      <Navigator />
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  view: {
    fontSize: 22,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    position: "relative",
  },
});
