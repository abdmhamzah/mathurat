import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { styles } from "../styles";

export default function DzikirCard(props) {
  let [fontsLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
    circular: require("../fonts/lineto-circular-book.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.carousel_dzikir}>
      <View style={styles.card_dzikir}>
        <Text style={styles.dzikir}>{props.arab}</Text>
        <Text style={styles.info_menu}>{props.terjemah}</Text>
      </View>
    </View>
  );
}
