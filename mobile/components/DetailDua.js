import React, { useContext } from "react";
import { Text, View } from "react-native";
import { COLOR, SIZES, FONTS } from "../styles";
import { fontArabChecker, fontLatinChecker } from "../helpers";
import { SettingContext } from "../contexts/SettingProvider";

export default function DetailDua(props) {
  const { fontArab, sizeArab, sizeTerjemah } = useContext(SettingContext);

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
