import React, { useContext } from "react";
import { Text, View } from "react-native";
import { COLOR, SIZES, FONTS } from "../styles";
import { fontArabChecker, fontLatinChecker } from "../helpers";
import { SettingContext } from "../contexts/SettingProvider";

export default function CardDua(props) {
  const { fontArab, sizeArab, sizeTerjemah, isTranslate } =
    useContext(SettingContext);

  return (
    <View style={{ alignItems: "center", marginBottom: SIZES.padding * 2 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.primary,
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
            // alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 6,
              textAlign: "left",
              color: COLOR.warning,
              ...FONTS.body2,
            }}
          >
            {props.judul}
          </Text>
          <Text
            style={{
              flex: 4,
              textAlign: "right",
              color: COLOR.warning,
              ...FONTS.body2,
            }}
          >
            Dibaca {props.pengulangan}x
          </Text>
        </View>
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={fontArabChecker(fontArab, sizeArab)}>{props.arab}</Text>
        </View>
        {isTranslate ? (
          <>
            <Text
              style={{
                color: COLOR.danger,
                marginBottom: SIZES.padding,
                ...FONTS.body4,
              }}
            >
              Terjemah
            </Text>
            <Text style={fontLatinChecker(sizeTerjemah)}>{props.terjemah}</Text>
          </>
        ) : null}
      </View>
    </View>
  );
}
