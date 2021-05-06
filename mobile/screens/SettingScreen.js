import React from "react";
import { ScrollView } from "react-native";
import { SettingMathurat, SettingSize } from "../components";

export default function Setting() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SettingMathurat />
      <SettingSize />
    </ScrollView>
  );
}
