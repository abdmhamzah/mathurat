import React from "react";
import { View, Text } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";

export default function DzikirCard(props) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: COLOR.secondary,
        width: SIZES.width,
      }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: COLOR.primary,
          borderRadius: SIZES.padding,
          paddingVertical: SIZES.padding,
          width: SIZES.width - SIZES.padding * 4,
        }}
      >
        <Text
          style={{
            color: COLOR.danger,
            marginTop: SIZES.padding,
            textAlign: "center",
            ...FONTS.arab1,
          }}
        >
          {props.arab}
        </Text>
        <Text
          style={{
            color: COLOR.gray,
            marginVertical: SIZES.padding,
            paddingHorizontal: SIZES.padding,
            textAlign: "center",
            ...FONTS.body3,
          }}
        >
          {props.terjemah}
        </Text>
      </View>
    </View>
  );
}
