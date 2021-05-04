import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

export default function CardMenu(props) {
  const navigation = useNavigation();

  function goToTitle() {
    navigation.navigate(props.title);
  }

  return (
    <TouchableOpacity onPress={goToTitle} style={styles.button}>
      <Image source={props.logo} style={styles.logo} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
