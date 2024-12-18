import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface PropTypes {
  name: string;
}

const Greet = ({ name }: PropTypes) => {
  return <Text style={styles.text}>Good Morning Mr/Mrs . {name}</Text>;
};

export default Greet;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "cursive",
    textAlign: "center",
    padding: 10,
    borderColor: "black",
    borderWidth: 2, // Added to make the border visible
    shadowColor: "#1a1a1a", // Shadow properties for iOS
    shadowOffset: { width: 2, height: 2 }, // Shadow position
    shadowOpacity: 0.5, // Shadow transparency
    shadowRadius: 4, // Shadow blur radius
    elevation: 5, // Shadow effect for Android
    margin: 15,
    borderRadius: 5,
  },
});
