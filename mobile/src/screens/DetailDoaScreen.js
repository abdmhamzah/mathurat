import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "../styles";

export default function DetailDoaScreen({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.scroll_screen}>
      <FlatList
        data={data}
        contentContainerStyle={{ marginVertical: 25 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.pengulangan}>{item.judul}</Text>
            <Text style={styles.arabic}>{item.arab}</Text>
            <Text style={styles.info}>Terjemah</Text>
            <Text style={styles.terjemah}>{item.terjemah}</Text>
          </View>
        )}
      />
    </View>
  );
}
