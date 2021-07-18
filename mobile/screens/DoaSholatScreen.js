import React, { useContext } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { dataDoaSholat } from "../data/dataDoaSholat";
import { COLOR, SIZES, FONTS } from "../styles";
import { SettingContext } from "../contexts/SettingProvider";

export default function DoaSholatScreen({ navigation }) {
  const { sizeArab, sizeTerjemah, fontArab } = useContext(SettingContext);

  return (
    <FlatList
      data={dataDoaSholat}
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
