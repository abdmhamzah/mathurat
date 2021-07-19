import React, { useContext } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { COLOR, SIZES, FONTS } from "../styles";
import { DataContext } from "../contexts/DataProvider";

export default function DoaSholatScreen({ navigation }) {
  const { doaSholat } = useContext(DataContext);
  return (
    <FlatList
      data={doaSholat}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
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
          style={{
            flex: 1,
            backgroundColor: COLOR.primary,
            marginHorizontal: SIZES.padding * 2,
            marginBottom: SIZES.padding,
            padding: SIZES.padding * 2,
            borderRadius: SIZES.padding,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLOR.warning,
              ...FONTS.h3,
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
