import React from "react";
import { ScrollView, View } from "react-native";
import { DetailDua } from "../components";
import { styles } from "../styles";

export default function DetailHadistScreen({ route }) {
  const { judul, arab, terjemah } = route.params;
  return (
    <View style={styles.scroll_screen}>
      <ScrollView
        contentContainerStyle={{ marginVertical: 12 }}
        showsVerticalScrollIndicator={false}
      >
        <DetailDua judul={judul} arab={arab} terjemah={terjemah} />
      </ScrollView>
    </View>
  );
}
