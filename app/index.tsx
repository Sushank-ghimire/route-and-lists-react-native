import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import BgImage from "@/assets/bg.jpg";
import Navigator from "@/components/Navigator";

const HomeScreen = () => {
  return (
    <ImageBackground source={BgImage} style={styles.view}>
      <StatusBar
        animated
        barStyle="dark-content" // Controls text color of the status bar (dark or light)
        hidden={false} // Ensures the status bar is visible
        backgroundColor="white" // Background color for Android (iOS ignores this)
      />
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
