import { View, StyleSheet, StatusBar } from "react-native";
import React from "react";
import CircleWithCount from "@/components/CircleWithCount";
import Navigator from "@/components/Navigator";

const counter = () => {
  return (
    <View style={styles.view}>
      <StatusBar
        animated
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <CircleWithCount />
      <Navigator />
    </View>
  );
};

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

export default counter;
