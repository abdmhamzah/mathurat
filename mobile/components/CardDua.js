import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, SIZES, FONTS } from "../styles";

export default function CardDua(props) {
  const [isTranslate, setIsTranslate] = useState(false);
  const [sizeArab, setSizeArab] = useState(30);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);

  async function getTranslate() {
    try {
      const jsonValue = await AsyncStorage.getItem("translate");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsTranslate(value) : null;
    } catch (e) {}
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
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: COLOR.warning, ...FONTS.body2 }}>
            Dibaca {props.pengulangan}x
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "right",
              color: COLOR.warning,
              ...FONTS.body2,
            }}
          >
            {props.judul}
          </Text>
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={fontSizeArab()}>{props.arab}</Text>
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
            <Text style={fontSizeTerjemah()}>{props.terjemah}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
}
