import {
  Button,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Navigator from "@/components/Navigator";
import TicTacToeGame from "@/components/TicTacToeGame";

const tictactoe = () => {
  return (
    <View style={styles.view}>
      <StatusBar
        animated
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <TicTacToeGame />
      <Navigator />
    </View>
  );
};

export default tictactoe;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    flexDirection: "column",
    position: "relative",
    flexGrow: 1,
  },
});
