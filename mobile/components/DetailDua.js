import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, SIZES, FONTS } from "../styles";
import { fontArabChecker, fontLatinChecker } from "../helpers";

export default function DetailDua(props) {
  const [sizeArab, setSizeArab] = useState(35);
  const [sizeTerjemah, setSizeTerjemah] = useState(18);
  const [fontArab, setFontArab] = useState("Uthmani");

  async function getFontArab() {
    const jsonValue = await AsyncStorage.getItem("fontArab");
    const { value } = JSON.parse(jsonValue);
    return jsonValue != null ? setFontArab(value) : setFontArab("Uthmani");
  }

  async function getArabSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeArab");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeArab(value) : setSizeArab(35);
    } catch (e) {}
  }

  async function getTranslateSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeTerjemah");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : setSizeTerjemah(18);
    } catch (e) {}
  }

  useEffect(() => {
    getFontArab();
    getArabSize();
    getTranslateSize();
  }, [sizeArab, sizeTerjemah]);

  return (
    <View
      style={{
        backgroundColor: COLOR.secondary,
        alignItems: "center",
        marginVertical: SIZES.padding * 2,
      }}
    >
      <View
        style={{
          backgroundColor: COLOR.primary,
          width: SIZES.width - SIZES.padding * 4,
          padding: SIZES.padding * 2,
          borderRadius: SIZES.padding,
          marginBottom: SIZES.base * 2,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLOR.warning,
            ...FONTS.h3,
          }}
        >
          {props.judul}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: COLOR.primary,
          width: SIZES.width - SIZES.padding * 4,
          padding: SIZES.padding * 2,
          borderRadius: SIZES.padding,
          marginBottom: SIZES.base * 2,
        }}
      >
        <Text style={fontArabChecker(fontArab, sizeArab)}>{props.arab}</Text>
      </View>
      <View
        style={{
          backgroundColor: COLOR.primary,
          width: SIZES.width - SIZES.padding * 4,
          padding: SIZES.padding * 2,
          borderRadius: SIZES.padding,
          marginBottom: SIZES.base * 2,
        }}
      >
        <Text
          style={{
            color: COLOR.danger,
            marginBottom: SIZES.padding,
            ...FONTS.body3,
          }}
        >
          Terjemah
        </Text>
        <Text style={fontLatinChecker(sizeTerjemah)}>{props.terjemah}</Text>
      </View>
    </View>
  );
}
