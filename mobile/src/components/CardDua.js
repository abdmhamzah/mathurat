import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";

export default function Card(props) {
  let [fontsLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
    circular: require("../fonts/lineto-circular-book.ttf"),
  });

  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  async function getTranslate() {
    const jsonValue = await AsyncStorage.getItem("translate");
    const { value } = JSON.parse(jsonValue);
    setIsTranslate(value);
  }

  useEffect(() => {
    getTranslate();
  }, [isTranslate]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.card_dua}>
      <View style={styles.header}>
        <Text style={styles.pengulangan}>Dibaca {props.pengulangan}x</Text>
        <Text style={styles.judul}>{props.judul}</Text>
      </View>
      <Text style={styles.arabic}>{props.arab}</Text>
      {isTranslate ? (
        <>
          <Text style={styles.info}>Terjemah</Text>
          <Text style={styles.terjemah}>{props.terjemah}</Text>
        </>
      ) : null}
      {/* <Text style={styles.info}>Fadhillah</Text>
      <Text style={styles.fadilah}>Isi Fadhilah</Text> */}
    </View>
  );
}
