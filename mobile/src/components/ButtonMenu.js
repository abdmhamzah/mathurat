import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";

export default function CardMenu(props) {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    circularBold: require("../fonts/lineto-circular-black.ttf"),
  });

  function goToTitle() {
    navigation.navigate(props.title);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableOpacity onPress={goToTitle} style={styles.button}>
      <Image source={props.logo} style={styles.logo} />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}
