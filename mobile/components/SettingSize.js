import React, { useState, useContext } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { COLOR, FONTS, SIZES } from "../styles";
import { fontArabChecker, fontLatinChecker } from "../helpers";
import { SettingContext } from "../contexts/SettingProvider";

export default function SettingSize() {
  const [toggleSizeArab, setToggleSizeArab] = useState(false);
  const [toggleSizeTerjemah, setToggleSizeTerjemah] = useState(false);
  const [toggleFontArab, setToggleFontArab] = useState(false);

  const {
    fontArab,
    setFontArab,
    sizeArab,
    setSizeArab,
    sizeTerjemah,
    setSizeTerjemah,
  } = useContext(SettingContext);

  const settingSizeArab = () => {
    return (
      <View style={{ flexDirection: "column", marginTop: SIZES.padding * 2 }}>
        <View style={{ width: SIZES.width, alignItems: "center" }}>
          <View
            style={{
              backgroundColor: COLOR.primary,
              height: 130,
              width: SIZES.width - SIZES.padding * 4,
              marginVertical: SIZES.padding,
              padding: SIZES.padding,
              borderRadius: SIZES.padding,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={fontArabChecker(fontArab, sizeArab)}>
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </Text>
            <Text style={fontLatinChecker(sizeTerjemah)}>
              Bismillahirrahmaanirrahim
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginHorizontal: SIZES.padding * 2,
            marginTop: SIZES.padding,
            marginBottom: SIZES.base,
            color: COLOR.warning,
            ...FONTS.body4,
          }}
        >
          UKURAN TEKS
        </Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: COLOR.primary,
            borderColor: COLOR.secondary,
            borderTopWidth: 1,
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.base * 1.4,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setToggleSizeArab(!toggleSizeArab)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ flex: 9, color: COLOR.gray, ...FONTS.body2 }}>
                Ukuran Font Arab
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: COLOR.danger,
                  textAlign: "right",
                  ...FONTS.body2,
                }}
              >
                {sizeArab}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {toggleSizeArab && (
          <View
            style={{
              height: 240,
              width: SIZES.width,
              backgroundColor: COLOR.primary,
              color: COLOR.warning,
            }}
          >
            <Picker
              style={{
                height: 50,
                width: SIZES.width,
                position: "absolute",
              }}
              itemStyle={{ color: COLOR.white }}
              selectedValue={`${sizeArab}`}
              onValueChange={(itemValue, itemIndex) => setSizeArab(itemValue)}
            >
              <Picker.Item label="30" value="30" />
              <Picker.Item label="35" value="35" />
              <Picker.Item label="40" value="40" />
              <Picker.Item label="45" value="45" />
              <Picker.Item label="50" value="50" />
            </Picker>
          </View>
        )}
      </View>
    );
  };

  const settingSizeTerjemah = () => {
    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: COLOR.primary,
            borderColor: COLOR.secondary,
            borderTopWidth: 1,
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.base * 1.4,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setToggleSizeTerjemah(!toggleSizeTerjemah)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ flex: 9, color: COLOR.gray, ...FONTS.body2 }}>
                Ukuran Font Terjemah
              </Text>
              <Text
                style={{
                  flex: 1,
                  color: COLOR.danger,
                  textAlign: "right",
                  ...FONTS.body2,
                }}
              >
                {sizeTerjemah}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {toggleSizeTerjemah && (
          <View
            style={{
              height: 240,
              width: SIZES.width,
              backgroundColor: COLOR.primary,
              color: COLOR.warning,
            }}
          >
            <Picker
              style={{
                height: 50,
                width: SIZES.width,
                position: "absolute",
              }}
              itemStyle={{ color: COLOR.white }}
              selectedValue={`${sizeTerjemah}`}
              onValueChange={(itemValue, itemIndex) =>
                setSizeTerjemah(itemValue)
              }
            >
              <Picker.Item label="12" value="12" />
              <Picker.Item label="14" value="14" />
              <Picker.Item label="16" value="16" />
              <Picker.Item label="18" value="18" />
              <Picker.Item label="20" value="20" />
            </Picker>
          </View>
        )}
      </View>
    );
  };

  function settingFontArab() {
    return (
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: COLOR.primary,
            borderColor: COLOR.secondary,
            borderTopWidth: 1,
            paddingHorizontal: SIZES.padding * 2,
            paddingVertical: SIZES.base * 1.4,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => setToggleFontArab(!toggleFontArab)}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ flex: 6, color: COLOR.gray, ...FONTS.body2 }}>
                Font Arab
              </Text>
              <Text
                style={{
                  flex: 4,
                  color: COLOR.danger,
                  textAlign: "right",
                  ...FONTS.body2,
                }}
              >
                {fontArab}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {toggleFontArab && (
          <View
            style={{
              height: 240,
              width: SIZES.width,
              backgroundColor: COLOR.primary,
              color: COLOR.warning,
            }}
          >
            <Picker
              style={{
                height: 50,
                width: SIZES.width,
                position: "absolute",
              }}
              itemStyle={{ color: COLOR.white }}
              selectedValue={fontArab}
              onValueChange={(itemValue, itemIndex) => setFontArab(itemValue)}
            >
              <Picker.Item label="Uthmani" value="Uthmani" />
              <Picker.Item label="Lateef" value="Lateef" />
            </Picker>
          </View>
        )}
      </View>
    );
  }

  return (
    <View>
      {settingSizeArab()}
      {settingSizeTerjemah()}
      {settingFontArab()}
    </View>
  );
}
