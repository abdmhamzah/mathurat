import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, SIZES, FONTS } from "../styles";
import { fontArabChecker, fontLatinChecker } from "../helpers";

export default function CardDua(props) {
  const [isTranslate, setIsTranslate] = useState(false);
  const [sizeArab, setSizeArab] = useState(35);
  const [sizeTerjemah, setSizeTerjemah] = useState(18);
  const [fontArab, setFontArab] = useState("Uthmani");

  async function getFontArab() {
    const jsonValue = await AsyncStorage.getItem("fontArab");
    const { value } = JSON.parse(jsonValue);
    return jsonValue != null ? setFontArab(value) : setFontArab("Uthmani");
  }

  async function getTranslate() {
    try {
      const jsonValue = await AsyncStorage.getItem("translate");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsTranslate(value) : setIsTranslate(false);
    } catch (e) {}
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
    getTranslate();
    getArabSize();
    getTranslateSize();
  }, [isTranslate, sizeArab, sizeTerjemah]);

  return (
    <View style={{ alignItems: "center", marginBottom: SIZES.padding * 2 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.primary,
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.padding * 2,
          width: SIZES.width - SIZES.padding * 5,
          borderRadius: SIZES.padding,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 6,
              textAlign: "left",
              color: COLOR.warning,
              ...FONTS.body2,
            }}
          >
            {props.judul}
          </Text>
          <Text style={{ flex: 4, textAlign: "right", color: COLOR.warning, ...FONTS.body2 }}>
            Dibaca {props.pengulangan}x
          </Text>
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={fontArabChecker(fontArab, sizeArab)}>{props.arab}</Text>
        </View>
        {isTranslate ? (
          <>
            <Text
              style={{
                color: COLOR.danger,
                marginBottom: SIZES.padding,
                ...FONTS.body4,
              }}
            >
              Terjemah
            </Text>
            <Text style={fontLatinChecker(sizeTerjemah)}>{props.terjemah}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
}
