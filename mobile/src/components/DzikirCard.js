import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

export default function DzikirCard(props) {
  return (
    <View style={styles.carousel_dzikir}>
      <View style={styles.card_dzikir}>
        <Text style={styles.dzikir}>{props.arab}</Text>
        <Text style={styles.info_menu}>{props.terjemah}</Text>
      </View>
    </View>
  );
}
