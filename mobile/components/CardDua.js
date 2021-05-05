import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, SIZES, FONTS } from "../styles";

export default function Card(props) {
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

  useEffect(() => {
    getTranslate();
  }, [isTranslate]);

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.primary,
          marginBottom: SIZES.padding * 2,
          paddingHorizontal: SIZES.padding * 2,
          paddingVertical: SIZES.padding * 2,
          width: SIZES.width - SIZES.padding * 5,
          borderRadius: SIZES.padding,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ flex: 1, color: COLOR.warning, ...FONTS.body2 }}>
            Dibaca {props.pengulangan}x
          </Text>
          <Text
            style={{
              flex: 1,
              textAlign: "right",
              color: COLOR.warning,
              ...FONTS.body2,
            }}
          >
            {props.judul}
          </Text>
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text
            style={{
              textAlign: "center",
              color: COLOR.gray,
              ...FONTS.arab1,
            }}
          >
            {props.arab}
          </Text>
        </View>
        {isTranslate ? (
          <>
            <Text
              style={{
                color: COLOR.danger,
                marginTop: SIZES.padding,
                ...FONTS.body4,
              }}
            >
              Terjemah
            </Text>
            <Text
              style={{
                color: COLOR.gray,
                marginTop: SIZES.padding,
                ...FONTS.body2,
              }}
            >
              {props.terjemah}
            </Text>
          </>
        ) : null}
        {/* <Text style={styles.info}>Fadhillah</Text>
      <Text style={styles.fadilah}>Isi Fadhilah</Text> */}
      </View>
    </View>
  );
}
