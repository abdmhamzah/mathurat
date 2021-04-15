import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import data from "../data/mathurat.json";
import { CardDua } from "../components";
import { styles } from "../styles";

export default function MathuratSore() {
  const [mathuratSore, setMathuratSore] = useState(data.mathurat_sughra_sore);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll_screen}>
        {mathuratSore.map((doa, idx) => {
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
