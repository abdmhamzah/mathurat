import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataMathuratSughraPagi } from "../data/dataMathuratSughraPagi";
import { dataMathuratKubroPagi } from "../data/dataMathuratKubroPagi";
import { CardDua } from "../components";
import { SIZES } from "../styles";

export default function MathuratSore() {
  const [isKubro, setIsKubro] = useState(false);
  const [mathuratSughra, setMathuratSughra] = useState(dataMathuratSughraPagi);
  const [mathuratKubro, setMathuratKubro] = useState(dataMathuratKubroPagi);

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
