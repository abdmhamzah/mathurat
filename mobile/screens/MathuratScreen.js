import React, { useContext } from "react";
import { FlatList } from "react-native";
import { SettingContext } from "../contexts/SettingProvider";
import { CardDua } from "../components";
import { SIZES } from "../styles";
import { DataContext } from "../contexts/DataProvider";

export default function MathuratSore() {
  const { isKubro, isPagi } = useContext(SettingContext);

  const {
    mathuratSughraPagi,
    mathuratKubroPagi,
    mathuratSughraSore,
    mathuratKubroSore,
  } = useContext(DataContext);

  function setMathurat() {
    if (isPagi) {
      if (isKubro) {
        return mathuratKubroPagi;
      } else {
        return mathuratSughraPagi;
      }
    } else {
      if (isKubro) {
        return mathuratKubroSore;
      } else {
        return mathuratSughraSore;
      }
    }
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={setMathurat()}
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
