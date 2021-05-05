import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataMathuratSughraSore } from "../data/dataMathuratSughraSore";
import { dataMathuratKubroSore } from "../data/dataMathuratKubroSore";
import { CardDua } from "../components";
import { SIZES } from "../styles";

export default function MathuratSore() {
  const [isKubro, setIsKubro] = useState(false);
  const [mathuratSughra, setMathuratSughra] = useState(dataMathuratSughraSore);
  const [mathuratKubro, setMathuratKubro] = useState(dataMathuratKubroSore);

  async function getKubro() {
    const jsonValue = await AsyncStorage.getItem("kubro");
    const { value } = JSON.parse(jsonValue);
    setIsKubro(value);
  }

  useEffect(() => {
    getKubro();
  }, [isKubro]);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={isKubro ? mathuratKubro : mathuratSughra}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: SIZES.padding * 3 }}
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
