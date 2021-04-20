import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { dataMathuratSughraPagi } from "../data/dataMathuratSughraPagi";
import { CardDua } from "../components";
import { styles } from "../styles";

export default function MathuratSore() {
  const [mathuratPagi, setMathuratPagi] = useState(dataMathuratSughraPagi);

  return (
    <View style={styles.scroll_screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={mathuratPagi}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
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
