import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, SIZES, FONTS } from "../styles";

export default function DetailDua(props) {
  const [sizeArab, setSizeArab] = useState(30);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);

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
      console.log(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : null;
    } catch (e) {}
  }

  function fontSizeArab() {
    if (sizeArab == 30) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab5 };
    }
    if (sizeArab == 35) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab4 };
    }
    if (sizeArab == 40) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab3 };
    }
    if (sizeArab == 45) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab2 };
    }
    if (sizeArab == 50) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab1 };
    }
  }

  function fontSizeTerjemah() {
    if (sizeTerjemah == 12) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body5 };
    }
    if (sizeTerjemah == 14) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body4 };
    }
    if (sizeTerjemah == 16) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body3 };
    }
    if (sizeTerjemah == 18) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body2 };
    }
    if (sizeTerjemah == 20) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body1 };
    }
  }

  useEffect(() => {
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
        <Text style={fontSizeArab()}>{props.arab}</Text>
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
        <Text style={fontSizeTerjemah()}>{props.terjemah}</Text>
      </View>
    </View>
  );
}
