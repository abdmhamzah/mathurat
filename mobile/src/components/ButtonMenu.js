import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("screen").width;

export default function CardMenu(props) {
  const navigation = useNavigation();

  function goToTitle() {
    navigation.navigate(props.title);
  }

  return (
    <TouchableOpacity onPress={goToTitle} style={styles.button}>
      <Image source={props.logo} style={styles.logo} />
      <Text style={styles.title}>{props.title}</Text>
      {/* <Text style={{ color: "white" }}>{JSON.stringify(props.title)}</Text> */}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#312c51",
    width: screenWidth / 2.5,
    marginHorizontal: screenWidth / 22,
    marginVertical: 20,
    borderRadius: 8,
  },
  title: {
    paddingHorizontal: 14,
    paddingVertical: 25,
    color: "#f0c38e",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  logo: {
    height: screenWidth / 5,
    width: screenWidth / 5,
    marginTop: 25,
  },
});
