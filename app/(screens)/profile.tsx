import Navigator from "@/components/Navigator";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <Image style={styles.image} source={require("@/assets/bg.jpg")} />
          <Text style={styles.heading}>Your Name</Text>
          <Text style={styles.text}>About You Bla Bla</Text>
          <TouchableOpacity>
            <Button onPress={() => alert("You pressed")} title="Press Me" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.navigator}>
        <Navigator />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view: {
    margin: "auto",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    height: "auto",
    width: "80%",
    rowGap: 9,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
  navigator: {
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginInline: "auto",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffe",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    maxWidth: "auto",
    fontWeight: "bold",
  },
});

export default Profile;
