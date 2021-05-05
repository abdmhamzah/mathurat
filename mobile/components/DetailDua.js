import React from "react";
import { Text, View } from "react-native";
import { COLOR, SIZES, FONTS } from "../styles";

export default function DetailDua(props) {
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
        <Text
          style={{
            color: COLOR.gray,
            textAlign: "center",
            ...FONTS.arab1,
          }}
        >
          {props.arab}
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
        <Text
          style={{
            color: COLOR.danger,
            marginBottom: SIZES.padding,
            ...FONTS.body3,
          }}
        >
          Terjemah
        </Text>
        <Text style={{ color: COLOR.gray, ...FONTS.body2 }}>
          {props.terjemah}
        </Text>
      </View>
    </View>
  );
}
