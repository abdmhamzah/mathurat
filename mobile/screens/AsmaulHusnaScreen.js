import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, FlatList } from "react-native";
import { dataAsmaulHusna } from "../data";
import { COLOR, FONTS, SIZES } from "../styles";
import { SettingContext } from "../contexts/SettingProvider";

export default function AsmaulHusnaScreen(props) {
  const { fontArab } = useContext(SettingContext);
  const [asmaulHusna, setAsmaulHusna] = useState(dataAsmaulHusna);
  const [initialX1, setInitialX1] = useState(1);
  const [initialY1, setInitialY1] = useState(1);
  const [initialX2, setInitialX2] = useState(1);
  const [initialY2, setInitialY2] = useState(1);

  async function transformBox() {
    await setInitialX1(-1);
    await setInitialY1(1);
    await setInitialX2(-1);
    await setInitialY2(1);
  }

  useEffect(() => {
    transformBox();
  }, [fontArab, initialX1, initialX2, initialY1, initialY2]);

  return (
    <FlatList
      data={asmaulHusna}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: SIZES.padding,
        alignItems: "center",
        transform: [{ scaleY: initialY1 }, { scaleX: initialX1 }],
      }}
      renderItem={({ item }) => (
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
            transform: [{ scaleY: initialY2 }, { scaleX: initialX2 }],
          }}
        >
          <View
            style={{
              height: 130,
              width: SIZES.width / 2 - SIZES.padding * 3,
              backgroundColor: COLOR.primary,
              padding: SIZES.padding,
              borderTopLeftRadius: SIZES.padding,
              borderTopRightRadius: SIZES.padding,
              justifyContent: "center",
            }}
          >
            <View
              style={{ alignItems: "center", marginHorizontal: SIZES.padding }}
            >
              {item.id != 85 ? (
                <Text
                  style={
                    fontArab === "Lateef"
                      ? {
                          color: COLOR.danger,
                          textAlign: "center",
                          ...FONTS.arab1,
                        }
                      : {
                          color: COLOR.danger,
                          textAlign: "center",
                          ...FONTS.arabUthmani2,
                        }
                  }
                >
                  {item.arab}
                </Text>
              ) : (
                <Text
                  style={
                    fontArab === "Lateef"
                      ? {
                          color: COLOR.danger,
                          textAlign: "center",
                          ...FONTS.arab4,
                        }
                      : {
                          color: COLOR.danger,
                          textAlign: "center",
                          ...FONTS.arabUthmani5,
                        }
                  }
                >
                  {item.arab}
                </Text>
              )}
              <Text
                style={{
                  color: COLOR.gray,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                {item.transliterasi.toUpperCase()}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              width: SIZES.width / 2 - SIZES.padding * 3,
              backgroundColor: COLOR.primary,
              borderTopWidth: 1,
              borderTopColor: COLOR.secondary,
              borderBottomLeftRadius: SIZES.padding,
              borderBottomRightRadius: SIZES.padding,
              padding: SIZES.base,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: COLOR.gray,
                ...FONTS.info,
              }}
            >
              {item.terjemah}
            </Text>
          </View>
        </View>
      )}
    />
  );
}
