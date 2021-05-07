import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, FlatList } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";

export default function DetailDoaScreen({ route }) {
  const { data } = route.params;
  const [sizeArab, setSizeArab] = useState(30);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);

  async function getArabSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeArab");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeArab(value) : null;
    } catch (e) {}
  }

  async function getTranslateSize() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeTerjemah");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : null;
    } catch (e) {}
  }

  function fontSizeArab() {
    if (sizeArab == 30) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab5 };
    }
    if (sizeArab == 35) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab4 };
    }
    if (sizeArab == 40) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab3 };
    }
    if (sizeArab == 45) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab2 };
    }
    if (sizeArab == 50) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab1 };
    }
  }

  function fontSizeTerjemah() {
    if (sizeTerjemah == 12) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body5 };
    }
    if (sizeTerjemah == 14) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body4 };
    }
    if (sizeTerjemah == 16) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body3 };
    }
    if (sizeTerjemah == 18) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body2 };
    }
    if (sizeTerjemah == 20) {
      return { textAlign: "left", color: COLOR.gray, ...FONTS.body1 };
    }
  }

  useEffect(() => {
    getArabSize();
    getTranslateSize();
  }, [sizeArab, sizeTerjemah]);

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        marginVertical: SIZES.padding * 2,
        alignItems: "center",
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: COLOR.primary,
            width: SIZES.width - SIZES.padding * 4,
            marginBottom: SIZES.padding,
            padding: SIZES.padding * 2,
            borderRadius: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLOR.warning,
              marginBottom: SIZES.padding,
              ...FONTS.body2,
            }}
          >
            {item.judul}
          </Text>
          <Text style={fontSizeArab()}>{item.arab}</Text>
          <Text
            style={{
              color: COLOR.danger,
              marginBottom: SIZES.padding,
              ...FONTS.body4,
            }}
          >
            Terjemah
          </Text>
          <Text style={fontSizeTerjemah()}>{item.terjemah}</Text>
        </View>
      )}
    />
  );
}
