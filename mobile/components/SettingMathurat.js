import React, { useEffect, useState } from "react";
import { Text, View, Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, FONTS, SIZES } from "../styles";

export default function SettingMathurat() {
  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  async function getTranslate() {
    try {
      const jsonValue = await AsyncStorage.getItem("translate");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsTranslate(value) : setIsTranslate(false);
    } catch (e) {
      // error reading value
    }
  }

  async function getKubro() {
    try {
      const jsonValue = await AsyncStorage.getItem("kubro");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsKubro(value) : setIsKubro(false);
    } catch (e) {
      // error reading value
    }
  }

  async function getCc() {
    try {
      const jsonValue = await AsyncStorage.getItem("cc");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsCc(value) : setIsCc(false);
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getTranslate();
    getKubro();
    getCc();
  }, [isTranslate, isKubro, isCc]);

  const settingIsKubro = () => {
    function changeKubro() {
      const flag = isKubro;
      setIsKubro(!isKubro);
      if (flag !== isKubro) {
      } else {
        const jsonValue = JSON.stringify({ value: !isKubro });
        AsyncStorage.setItem("kubro", jsonValue);
      }
    }

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
          <Switch value={isKubro} onValueChange={changeKubro} trackColor={{ true: COLOR.danger }} />
        </View>
      </View>
    );
  };

  const settingIsCc = () => {
    function changeCc() {
      const flag = isCc;
      setIsCc(!isCc);
      if (flag !== isCc) {
      } else {
        const jsonValue = JSON.stringify({ value: !isCc });
        AsyncStorage.setItem("cc", jsonValue);
      }
    }

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
        <Text style={{ flex: 10, color: COLOR.gray, ...FONTS.body2 }}>Tampilkan Transliterasi</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Switch value={isCc} onValueChange={changeCc} trackColor={{ true: COLOR.danger }} />
        </View>
      </View>
    );
  };

  const settingIsTranslate = () => {
    function changeTranslate() {
      const flag = isTranslate;
      setIsTranslate(!isTranslate);
      if (flag !== isTranslate) {
      } else {
        const jsonValue = JSON.stringify({ value: !isTranslate });
        AsyncStorage.setItem("translate", jsonValue);
      }
    }

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
        <Text style={{ flex: 10, color: COLOR.gray, ...FONTS.body2 }}>Tampilkan Artinya</Text>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Switch
            value={isTranslate}
            onValueChange={changeTranslate}
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
