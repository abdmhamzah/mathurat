import React from "react";
import { ScrollView } from "react-native";
import { SettingMathurat, SettingSize, VersionApp } from "../components";

export default function Setting() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SettingMathurat />
      <SettingSize />
      <VersionApp />
    </ScrollView>
  );
}
