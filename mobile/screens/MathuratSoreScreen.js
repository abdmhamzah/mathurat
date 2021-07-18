import React, { useState, useContext } from "react";
import { FlatList } from "react-native";
import { dataMathuratSughraSore } from "../data/dataMathuratSughraSore";
import { dataMathuratKubroSore } from "../data/dataMathuratKubroSore";
import { SettingContext } from "../contexts/SettingProvider";
import { CardDua } from "../components";
import { SIZES } from "../styles";

export default function MathuratSore() {
  const { isKubro } = useContext(SettingContext);
  const [mathuratSughra, setMathuratSughra] = useState(dataMathuratSughraSore);
  const [mathuratKubro, setMathuratKubro] = useState(dataMathuratKubroSore);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={isKubro ? mathuratKubro : mathuratSughra}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
      renderItem={({ item }) => (
        <CardDua
          judul={item.judul}
          arab={item.arab}
          terjemah={item.terjemah}
          pengulangan={item.pengulangan}
        />
      )}
    />
  );
}
