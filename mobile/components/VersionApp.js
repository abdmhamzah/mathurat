import React from "react";
import { expo } from "../app.json";
import { View, Text } from "react-native";
import { COLOR, SIZES, FONTS } from "../styles";

export default function VersionApp() {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: COLOR.primary,
        marginTop: SIZES.padding * 4,
        marginBottom: SIZES.padding * 4,
        paddingHorizontal: SIZES.padding * 2,
        paddingVertical: SIZES.base * 1.4,
      }}
    >
      <Text style={{ color: COLOR.gray, ...FONTS.body3 }}>
        Copyright © 2021 Mathurat {expo.version}
      </Text>
    </View>
  );
}
