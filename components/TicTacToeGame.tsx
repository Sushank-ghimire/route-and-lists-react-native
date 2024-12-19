import { Button, StyleSheet, Text, View, Alert } from "react-native";
import React, { useState } from "react";

const TicTacToeGame = () => {
  const [position, setPositions] = useState<string[]>([
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
  const [winner, setWinner] = useState<string | null>(null);

  const handleClick = (index: number) => {
    if (position[index] !== " " || winner) return;

    const newPositions = [...position];
    newPositions[index] = turn;
    setPositions(newPositions);

    // Check for a winner
    const gameWinner = checkWinner(newPositions);
    if (gameWinner) {
      setWinner(gameWinner);
      Alert.alert(`${gameWinner} Wins!`);
      return;
    }

    // Check for a draw
    if (!newPositions.includes(" ")) {
      setWinner("Draw");
      Alert.alert("It's a Draw!");
      return;
    }

    // Switch turns
    setTurn(turn === "X" ? "O" : "X");
  };

  const checkWinner = (positions: string[]): string | null => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        positions[a] !== " " &&
        positions[a] === positions[b] &&
        positions[a] === positions[c]
      ) {
        return positions[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setPositions([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    setTurn("X");
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tic Tac Toe Game</Text>
      <View style={styles.gameContainer}>
        {position.map((value, index) => (
          <View key={index} style={styles.cell}>
            <Button
              title={value === " " ? "" : value}
              color="#331188"
              onPress={() => handleClick(index)}
              disabled={value !== " " || !!winner}
            />
          </View>
        ))}
      </View>
      {winner && (
        <Text style={styles.winnerText}>
          {winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}
        </Text>
      )}
      <Button title="Restart Game" onPress={resetGame} color="#008CBA" />
    </View>
  );
};

export default TicTacToeGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  gameContainer: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 15
  },
  cell: {
    width: "33.33%",
    height: "33.33%",
    justifyContent: "center",
    alignItems: "center",
  },
  winnerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#444",
  },
});
