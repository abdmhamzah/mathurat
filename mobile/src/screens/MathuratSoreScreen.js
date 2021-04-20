import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { dataMathuratSughraSore } from "../data/dataMathuratSughraSore";
import { CardDua } from "../components";
import { styles } from "../styles";

export default function MathuratSore() {
  const [mathuratSore, setMathuratSore] = useState(dataMathuratSughraSore);

  return (
    <View style={styles.scroll_screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mathuratSore}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardDua
            judul={item.judul}
            arab={item.arab}
            terjemah={item.terjemah}
            pengulangan={item.pengulangan}
          />
        )}
      />
    </View>
  );
}
