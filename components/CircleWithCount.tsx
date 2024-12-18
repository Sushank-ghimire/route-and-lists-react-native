import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

const CircleWithCount = () => {
  const [count, setCount] = useState(0);

  const updatePress = () => {
    setCount((prev) => prev + 1);
  };

  const decreasePress = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.view}>
        <Text style={styles.title}>Counter</Text>
        <Text style={styles.text}>CircleWithCount</Text>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={updatePress} />
          <Button title="-" onPress={decreasePress} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CircleWithCount;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Makes content fill available space
    justifyContent: "center", // Centers the content vertically when not scrollable
    alignItems: "center", // Centers content horizontally
  },
  view: {
    width: "100%", // Full width to prevent horizontal scrolling
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  circle: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1a1b1f",
    marginVertical: 20,
  },
  circleText: {
    fontSize: 45,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row", // Buttons are displayed side by side
    justifyContent: "space-between",
    width: "60%",
    marginTop: 20,
  },
});
