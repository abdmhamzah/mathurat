import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { dataDoaSholat } from "../data/dataDoaSholat";
import { styles } from "../styles";

export default function DoaSholatScreen({ navigation }) {
  return (
    <View style={styles.scroll_screen}>
      <FlatList
        data={dataDoaSholat}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail Doa Sholat", {
                id: item.id,
                judul: item.title,
                data: item.data,
              });
            }}
            style={styles.button_list}
          >
            <Text style={styles.title_detail}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
