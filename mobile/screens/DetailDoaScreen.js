import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";
import { fontLatinChecker, fontArabChecker } from "../helpers";
import { SettingContext } from "../contexts/SettingProvider";

export default function DetailDoaScreen({ route }) {
  const { data } = route.params;
  const { sizeArab, sizeTerjemah, fontArab } = useContext(SettingContext);

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        marginVertical: SIZES.padding * 2,
        alignItems: "center",
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View
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
              color: COLOR.warning,
              marginBottom: SIZES.padding,
              ...FONTS.body2,
            }}
          >
            {item.judul}
          </Text>
          <Text style={fontArabChecker(fontArab, sizeArab)}>{item.arab}</Text>
          <Text
            style={{
              color: COLOR.danger,
              marginBottom: SIZES.padding,
              ...FONTS.body4,
            }}
          >
            Terjemah
          </Text>
          <Text style={fontLatinChecker(sizeTerjemah)}>{item.terjemah}</Text>
        </View>
      )}
    />
  );
}
