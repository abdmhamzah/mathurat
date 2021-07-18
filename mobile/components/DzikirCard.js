import React, { useContext } from "react";
import { View, Text } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";
import { SettingContext } from "../contexts/SettingProvider";

export default function DzikirCard(props) {
  const { fontArab } = useContext(SettingContext);

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
      </View>
    </View>
  );
}
