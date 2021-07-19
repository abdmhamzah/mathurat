import React, { useContext } from "react";
import { Text, View, Switch } from "react-native";
import { COLOR, FONTS, SIZES } from "../styles";
import { SettingContext } from "../contexts/SettingProvider";

export default function SettingMathurat() {
  const { isKubro, setIsKubro, isCc, setIsCc, isTranslate, setIsTranslate } =
    useContext(SettingContext);

  const settingIsKubro = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLOR.primary,
          borderColor: COLOR.secondary,
          borderTopWidth: 1,
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.base,
        }}
      >
        <Text style={{ flex: 10, color: COLOR.gray, ...FONTS.body2 }}>
          Aktifkan Ma'tsurat Kubro
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Switch
            value={isKubro}
            onValueChange={() => setIsKubro(!isKubro)}
            trackColor={{ true: COLOR.danger }}
          />
        </View>
      </View>
    );
  };

  const settingIsCc = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLOR.primary,
          borderColor: COLOR.secondary,
          borderTopWidth: 1,
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.base,
        }}
      >
        <Text style={{ flex: 10, color: COLOR.gray, ...FONTS.body2 }}>
          Tampilkan Transliterasi
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Switch
            value={isCc}
            onValueChange={() => setIsCc(!isCc)}
            trackColor={{ true: COLOR.danger }}
          />
        </View>
      </View>
    );
  };

  const settingIsTranslate = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLOR.primary,
          borderColor: COLOR.secondary,
          borderTopWidth: 1,
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.base,
        }}
      >
        <Text style={{ flex: 10, color: COLOR.gray, ...FONTS.body2 }}>
          Tampilkan Artinya
        </Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Switch
            value={isTranslate}
            onValueChange={() => setIsTranslate(!isTranslate)}
            trackColor={{ true: COLOR.danger }}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <Text
        style={{
          marginHorizontal: SIZES.padding * 2,
          marginTop: SIZES.padding * 2,
          marginBottom: SIZES.base,
          color: COLOR.warning,
          ...FONTS.body4,
        }}
      >
        AL MA'TSURAT
      </Text>
      {settingIsKubro()}
      {/* {settingIsCc()} */}
      {settingIsTranslate()}
    </View>
  );
}
