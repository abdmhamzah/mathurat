import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles";
import { dataHadist } from "../data/dataHadist";

export default function HadistScreen() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
    circular: require("../fonts/lineto-circular-book.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.scroll_screen}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={dataHadist}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail Hadist", {
                id: item.id,
                judul: item.judul,
                arab: item.arab,
                terjemah: item.terjemah,
              });
            }}
            style={styles.button_list}
          >
            <Text style={styles.title}>Hadist ke-{item.id}</Text>
            <Text style={styles.info_menu}>{item.judul}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
