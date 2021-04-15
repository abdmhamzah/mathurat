import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get("screen").width;

export default function CardMenu(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0c38e",
    width: screenWidth / 2.5,
    marginHorizontal: screenWidth / 20,
    marginVertical: 20,
    borderRadius: 8,
  },
  title: {
    paddingHorizontal: 14,
    paddingVertical: 25,
    color: "#312c51",
    fontWeight: "bold",
  },
});
