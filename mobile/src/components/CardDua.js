import React from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { styles } from "../styles";

export default function Card(props) {
  let [fontsLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
    circular: require("../fonts/lineto-circular-book.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.card_dua}>
      <View style={styles.header}>
        {props.pengulangan ? (
          <Text style={styles.pengulangan}>Dibaca {props.pengulangan}x</Text>
        ) : (
          <></>
        )}
        <Text style={props.pengulangan ? styles.judul : styles.judul_doa}>
          {props.judul}
        </Text>
      </View>
      <Text style={styles.arabic}>{props.arab}</Text>
      <Text style={styles.terjemah}>{props.terjemah}</Text>
      {/* <Text style={styles.fadilah_title}>Fadhillah</Text>
      <Text style={styles.fadilah}>Isi Fadhilah</Text> */}
    </View>
  );
}
