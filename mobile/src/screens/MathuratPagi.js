import React from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import data from "../data/data.json";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

import { Card } from "../components";

const windowWidth = Dimensions.get("window").width;

export default function MathuratSore(props) {
  const [fontLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
  });

  let mathurat_pagi = data.mathurat_sughra_pagi;

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          width: windowWidth,
          marginVertical: 120,
        }}
      >
        {mathurat_pagi.map((doa, idx) => {
          return (
            <Card
              key={idx}
              judul={doa.judul}
              arab={doa.arab}
              terjemah={doa.terjemah}
              pengulangan={doa.pengulangan}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48426d",
    justifyContent: "center",
  },
});
