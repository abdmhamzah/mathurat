import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, FlatList } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";
import { fontLatinChecker, fontArabChecker } from "../helpers";

export default function DetailDoaScreen({ route }) {
  const { data } = route.params;
  const [sizeArab, setSizeArab] = useState(30);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);
  const [fontArab, setFontArab] = useState("Uthmani");

  async function getFontArab() {
    const jsonValue = await AsyncStorage.getItem("fontArab");
    const { value } = JSON.parse(jsonValue);
    return jsonValue != null ? setFontArab(value) : null;
  }

  async function getArabSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeArab");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeArab(value) : null;
    } catch (e) {}
  }

  async function getTranslateSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeTerjemah");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : null;
    } catch (e) {}
  }

  useEffect(() => {
    getFontArab();
    getArabSize();
    getTranslateSize();
  }, [sizeArab, sizeTerjemah]);

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
