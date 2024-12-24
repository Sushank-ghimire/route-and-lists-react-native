import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListData = () => {
  const fruits = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "pear",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
  ];

  // Make an array of objects of 10 different countries details
  const countries = [
    { name: "India", population: "1.3 billion", capital: "New Delhi" },
    { name: "USA", population: "331 million", capital: "Washington D.C." },
    { name: "Indonesia", population: "273 million", capital: "Jakarta" },
    { name: "Pakistan", population: "220 million", capital: "Islamabad" },
    { name: "Brazil", population: "212 million", capital: "Brasília" },
    { name: "Nigeria", population: "206 million", capital: "Abuja" },
    { name: "Bangladesh", population: "161 million", capital: "Dhaka" },
    { name: "Russia", population: "146 million", capital: "Moscow" },
    { name: "Mexico", population: "126 million", capital: "Mexico City" },
    { name: "Japan", population: "126 million", capital: "Tokyo" },
    { name: "Ethiopia", population: "117 million", capital: "Addis Ababa" },
    { name: "Philippines", population: "110 million", capital: "Manila" },
    { name: "Egypt", population: "109 million", capital: "Cairo" },
    { name: "Vietnam", population: "98 million", capital: "Hanoi" },
  ];
  return (
    <View>
      <ScrollView style={styles.scollView}>
        <FlatList
          data={fruits}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return <Text style={styles.text}>{item}</Text>;
          }}
        />

        <FlatList
          data={countries}
          keyExtractor={(item) => item.capital}
          renderItem={({ item }) => {
            return (
              <View style={styles.container}>
                <Text>Country : {item.name}</Text>
                <Text>Capital : {item.capital}</Text>
                <Text>Populations : {item.population}</Text>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: "",
  },
  scollView: {
    flex: 1,
    flexGrow: 1,
    overflowY: "scroll",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
});
