import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigator from "@/components/Navigator";
import ListData from "@/components/ListData";

const Flatlist = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ListData />
      </View>
      <View style={styles.navigator}>
        <Navigator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  navigator: {
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
});

export default Flatlist;
