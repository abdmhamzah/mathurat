import React, { useContext } from "react";
import { Text, FlatList, TouchableOpacity } from "react-native";
import { DataContext } from "../contexts/DataProvider";
import { COLOR, FONTS, SIZES } from "../styles";

export default function HadistScreen({ navigation }) {
  const { hadist } = useContext(DataContext);
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={hadist}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: SIZES.padding * 2,
        alignItems: "center",
      }}
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
          style={{
            backgroundColor: COLOR.primary,
            width: SIZES.width - SIZES.padding * 4,
            marginBottom: SIZES.padding,
            padding: SIZES.padding * 2,
            borderRadius: SIZES.padding,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: COLOR.warning,
              marginBottom: SIZES.padding,
              ...FONTS.h3,
            }}
          >
            Hadist ke-{item.id}
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: COLOR.gray,
              ...FONTS.body4,
            }}
          >
            {item.judul}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}
