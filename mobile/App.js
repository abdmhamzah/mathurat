import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import data from "./src/data/data.json";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

import Card from "./src/components/Card";

const windowWidth = Dimensions.get("window").width;

export default function App() {
  const [fontLoaded] = useFonts({
    lateef: require("./src/fonts/Lateef-Regular.ttf"),
  });

  const [isSughraPagi, setIsSughraPagi] = useState(true);
  const [isSughraSore, setIsSughraSore] = useState(false);
  const [isKubraPagi, setIsKubraPagi] = useState(false);
  const [isKubraSore, setIsKubraSore] = useState(false);

  let mathurat_pagi = data.mathurat_sughra_pagi;
  let mathurat_sore = data.mathurat_sughra_sore;

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
