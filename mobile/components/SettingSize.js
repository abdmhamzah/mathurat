import React, { useEffect, useState } from "react";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR, FONTS, SIZES } from "../styles";

export default function SettingSize() {
  const [sizeArab, setSizeArab] = useState(35);
  const [sizeTerjemah, setSizeTerjemah] = useState(18);
  const [toggleSizeArab, setToggleSizeArab] = useState(false);
  const [toggleSizeTerjemah, setToggleSizeTerjemah] = useState(false);

  async function getSizeArab() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeArab");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeArab(value) : null;
    } catch (e) {
      // error reading value
    }
  }

  async function getSizeTerjemah() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeTerjemah");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : null;
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getSizeArab();
    getSizeTerjemah();
  }, [sizeArab, sizeTerjemah]);

  const settingsizeArab = () => {
    function changeSizeArab(value) {
      setSizeArab(value);
      const jsonValue = JSON.stringify({ value });
      AsyncStorage.setItem("sizeArab", jsonValue);
    }

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
              selectedValue={sizeArab}
              onValueChange={(itemValue, itemIndex) =>
                changeSizeArab(itemValue)
              }
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

  const settingsizeTerjemah = () => {
    function changeSizeTerjemah(value) {
      setSizeTerjemah(value);
      const jsonValue = JSON.stringify({ value });
      AsyncStorage.setItem("sizeTerjemah", jsonValue);
    }

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
              selectedValue={sizeTerjemah}
              onValueChange={(itemValue, itemIndex) =>
                changeSizeTerjemah(itemValue)
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

  return (
    <View>
      <Text
        style={{
          marginHorizontal: SIZES.padding * 2,
          marginTop: SIZES.padding * 2,
          marginBottom: SIZES.base,
          color: COLOR.warning,
          ...FONTS.body3,
        }}
      >
        UKURAN TEKS
      </Text>
      {settingsizeArab()}
      {settingsizeTerjemah()}
    </View>
  );
}
