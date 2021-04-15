import React from "react";
import { Dimensions, StyleSheet, View, ScrollView } from "react-native";
import data from "../data/mathurat.json";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

// components
import { CardDua } from "../components";

const windowWidth = Dimensions.get("screen").width;

export default function MathuratSore({ navigation }) {
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
          marginVertical: 20,
          paddingBottom: 140,
        }}
      >
        {mathurat_pagi.map((doa, idx) => {
          return (
            <CardDua
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
    alignItems: "center",
  },
});
