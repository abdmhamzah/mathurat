import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { dataAsmaulHusna } from "../data";
import { COLOR, FONTS, SIZES } from "../styles";

export default function AsmaulHusnaScreen(props) {
  const [asmaulHusna, setAsmaulHusna] = useState(dataAsmaulHusna);
  return (
    <FlatList
      data={asmaulHusna}
      keyExtractor={(item) => `${item.id}`}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: SIZES.padding,
        alignItems: "center",
      }}
      renderItem={({ item }) => (
        <View
          style={{
            marginHorizontal: SIZES.padding,
            marginVertical: SIZES.padding,
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
            <View style={{ alignItems: "center" }}>
              {item.id != 85 ? (
                <Text
                  style={{
                    color: COLOR.danger,
                    textAlign: "center",
                    ...FONTS.arab1,
                  }}
                >
                  {item.arab}
                </Text>
              ) : (
                <Text
                  style={{
                    color: COLOR.danger,
                    textAlign: "center",
                    ...FONTS.arab3,
                  }}
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
              height: 75,
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
                ...FONTS.body5,
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
