import React from "react";
import { Text, View } from "react-native";
import { styles } from "../styles";

export default function DetailDua(props) {
  return (
    <View style={styles.scroll_screen}>
      <View style={styles.card_detail_judul}>
        <Text style={styles.title_detail}>{props.judul}</Text>
      </View>
      <View style={styles.card_detail_arab}>
        <Text style={styles.arabic}>{props.arab}</Text>
      </View>
      <View style={styles.card_detail_terjemah}>
        <Text style={styles.info}>Terjemah</Text>
        <Text style={styles.terjemah}>{props.terjemah}</Text>
      </View>
    </View>
  );
}
