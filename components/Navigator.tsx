import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, usePathname } from "expo-router";

const Navigator = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <View style={styles.view}>
      <Link
        style={[
          styles.text,
          pathname === "/" && styles.activeText, // Apply active style conditionally
        ]}
        href="/"
      >
        Home
      </Link>
      <Link
        style={[
          styles.text,
          pathname === "/counter" && styles.activeText, // Example for another route
        ]}
        href="/counter"
      >
        Counter
      </Link>
    </View>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    maxHeight: 200,
    padding: 4,
    gap: 15,
    backgroundColor: "#1abcdf",
    paddingBottom: 15,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    color: "black",
  },
  activeText: {
    fontSize: 22,
    color: "white", // Highlight active link
    fontWeight: "bold", // Bold text for emphasis
    textDecorationLine: "underline", // Add an underline for visual cue
  },
});
