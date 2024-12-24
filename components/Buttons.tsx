import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const Buttons = () => {
  return (
    <View>
      <Button
        onPress={() => alert("Button pressed")}
        color={"indigo"}
        title="Alert Button"
      />
      <TouchableOpacity
        onPress={() => console.log("Pressed touchable opacity.")}
        style={styles.touchable}
      >
        <Text style={styles.text}>Touchable Opacity</Text>
      </TouchableOpacity>

      <Pressable
        onPress={() => console.log("Pressable text pressed.")}
        style={styles.touchable}
      >
        <Text style={styles.text}>Pressable</Text>
      </Pressable>

      <Pressable
        onPressIn={() => console.log("Press Started")}
        onPressOut={() => console.log("Press Ended")}
        onLongPress={() => {
          console.log("Long press detected.");
          alert("Long press detected.");
        }}
        style={styles.touchable}
      >
        <Text style={styles.text}>Pressable Time</Text>
      </Pressable>

      <TouchableOpacity style={styles.touchable}>
        <Link style={styles.text} href={"/(screens)/flatlist"}>
          Flat List
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  touchable: {
    marginTop: 9,
    padding: 5,
    backgroundColor: "red",
    borderRadius: 5,
  },
});
