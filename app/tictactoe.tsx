import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const tictactoe = () => {
  const [position, setPositions] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  const [turn, setTurn] = useState<"X" | "O">("X");

  const handleClick = (turn: string, index: number) => {
    if (turn === "X") {
    }
  };

  return (
    <View style={styles.view}>
      {position.map((_, index) => (
        <Pressable onPress={() => handleClick(turn, index)} key={index}>
          <Text>{position[index]}</Text>
        </Pressable>
      ))}
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
