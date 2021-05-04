import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Switch } from "react-native";
import { styles, danger } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {
  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  async function getTranslate() {
    try {
      const jsonValue = await AsyncStorage.getItem("translate");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsTranslate(value) : null;
    } catch (e) {
      // error reading value
    }
  }

  async function getKubro() {
    try {
      const jsonValue = await AsyncStorage.getItem("kubro");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsKubro(value) : null;
    } catch (e) {
      // error reading value
    }
  }

  async function getCc() {
    try {
      const jsonValue = await AsyncStorage.getItem("cc");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsCc(value) : null;
    } catch (e) {
      // error reading value
    }
  }

  function changeTranslate() {
    const flag = isTranslate;
    setIsTranslate(!isTranslate);
    if (flag !== isTranslate) {
    } else {
      const jsonValue = JSON.stringify({ value: !isTranslate });
      AsyncStorage.setItem("translate", jsonValue);
    }
  }

  function changeKubro() {
    const flag = isKubro;
    setIsKubro(!isKubro);
    if (flag !== isKubro) {
    } else {
      const jsonValue = JSON.stringify({ value: !isKubro });
      AsyncStorage.setItem("kubro", jsonValue);
    }
  }

  function changeCc() {
    const flag = isCc;
    setIsCc(!isCc);
    if (flag !== isCc) {
    } else {
      const jsonValue = JSON.stringify({ value: !isCc });
      AsyncStorage.setItem("cc", jsonValue);
    }
  }

  useEffect(() => {
    getTranslate();
    getKubro();
    getCc();
  }, [isTranslate, isKubro, isCc]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.setting_section}>AL MA'TSURAT</Text>
      <View style={styles.setting_item}>
        <Text style={styles.setting_title}>Aktifkan Ma'tsurat Kubro</Text>
        <View style={styles.setting_switch}>
          <Switch
            value={isKubro}
            onValueChange={changeKubro}
            trackColor={{ true: danger }}
          />
        </View>
      </View>
      {/* To be Continued */}
      {/* <View style={styles.setting_item}>
        <Text style={styles.setting_title}>Tampilkan Transliterasi</Text>
        <View style={styles.setting_switch}>
          <Switch
            value={isCc}
            onValueChange={changeCc}
            trackColor={{ true: danger }}
          />
        </View>
      </View> */}
      <View style={styles.setting_item}>
        <Text style={styles.setting_title}>Tampilkan Artinya</Text>
        <View style={styles.setting_switch}>
          <Switch
            value={isTranslate}
            onValueChange={changeTranslate}
            trackColor={{ true: danger }}
          />
        </View>
      </View>
    </ScrollView>
  );
}
