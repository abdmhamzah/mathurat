import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import data from "./src/data/data.json";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    lateef: require("./assets/fonts/Lateef-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  let arab = data.mathurat_pagi[0].arab;
  let terjemah = data.mathurat_pagi[0].terjemah;
  let pengulangan = data.mathurat_pagi[0].pengulangan;

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={setDataLoaded(true)} />
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.arab}>{arab}</Text>
      <Text>{terjemah}</Text>
      <Text>{pengulangan}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  arab: {
    fontFamily: "lateef",
  },
});
