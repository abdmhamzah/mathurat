import React, { useContext, useState } from "react";
import { FlatList } from "react-native";
import { dataMathuratSughraPagi } from "../data/dataMathuratSughraPagi";
import { dataMathuratKubroPagi } from "../data/dataMathuratKubroPagi";
import { SettingContext } from "../contexts/SettingProvider";
import { CardDua } from "../components";
import { SIZES } from "../styles";

export default function MathuratSore() {
  const { isKubro } = useContext(SettingContext);
  const [mathuratSughra, setMathuratSughra] = useState(dataMathuratSughraPagi);
  const [mathuratKubro, setMathuratKubro] = useState(dataMathuratKubroPagi);

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
