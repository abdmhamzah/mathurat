import React from "react";
import { ScrollView, View } from "react-native";
import { CardDua } from "../components";
import { styles } from "../styles";

export default function DetailHadistScreen({ route }) {
  const { judul, arab, terjemah } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll_screen}>
        <CardDua judul={judul} arab={arab} terjemah={terjemah} />
      </ScrollView>
    </View>
  );
}
