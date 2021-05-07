import React from "react";
import { ScrollView } from "react-native";
import { DetailDua } from "../components";
import { SIZES } from "../styles";

export default function DetailHadistScreen({ route }) {
  const { judul, arab, terjemah } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{ marginVertical: SIZES.padding }}
      showsVerticalScrollIndicator={false}
    >
      <DetailDua judul={judul} arab={arab} terjemah={terjemah} />
    </ScrollView>
  );
}
