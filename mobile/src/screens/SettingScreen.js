import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { Text, View, ScrollView, Switch } from "react-native";
import { styles, danger } from "../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Setting() {
  let [fontsLoaded] = useFonts({
    circular: require("../fonts/lineto-circular-book.ttf"),
  });

  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  async function getTranslate() {
    const jsonValue = await AsyncStorage.getItem("translate");
    const { value } = JSON.parse(jsonValue);
    setIsTranslate(value);
  }

  async function getKubro() {
    const jsonValue = await AsyncStorage.getItem("kubro");
    const { value } = JSON.parse(jsonValue);
    setIsKubro(value);
  }

  async function getCc() {
    const jsonValue = await AsyncStorage.getItem("cc");
    const { value } = JSON.parse(jsonValue);
    setIsCc(value);
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

  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
      <View style={styles.setting_item}>
        <Text style={styles.setting_title}>Tampilkan Transliterasi</Text>
        <View style={styles.setting_switch}>
          <Switch
            value={isCc}
            onValueChange={changeCc}
            trackColor={{ true: danger }}
          />
        </View>
      </View>
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
