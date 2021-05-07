import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";
import { fontArabChecker } from "../helpers";

export default function DzikirCard(props) {
  const [fontArab, setFontArab] = useState("Uthmani");

  async function getFontArab() {
    const jsonValue = await AsyncStorage.getItem("fontArab");
    const { value } = JSON.parse(jsonValue);
    return jsonValue != null ? setFontArab(value) : null;
  }
  useEffect(() => {
    getFontArab();
  }, [fontArab]);
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: COLOR.secondary,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLOR.primary,
          borderRadius: SIZES.padding,
          paddingVertical: SIZES.padding,
          width: SIZES.width - SIZES.padding * 10,
          height: (SIZES.height * 2) / 7 - SIZES.padding * 3,
        }}
      >
        <Text
          style={
            fontArab === "Uthmani"
              ? {
                  color: COLOR.danger,
                  marginTop: SIZES.padding,
                  textAlign: "center",
                  ...FONTS.arabUthmani2,
                }
              : {
                  color: COLOR.danger,
                  marginTop: SIZES.padding,
                  textAlign: "center",
                  ...FONTS.arab1,
                }
          }
        >
          {props.arab}
        </Text>
        <Text
          style={{
            color: COLOR.gray,
            marginVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {props.transliterasi.toUpperCase()}
        </Text>
        {/* <Text style={{ color: COLOR.gray, ...FONTS.body5 }}>{props.translate}</Text> */}
      </View>
    </View>
  );
}
