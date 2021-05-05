import React from "react";
import { View, Text, FlatList } from "react-native";
import { FONTS, SIZES, COLOR } from "../styles";

export default function DetailDoaScreen({ route }) {
  const { data } = route.params;

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
            marginBottom: SIZES.padding * 2,
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
          <Text
            style={{
              color: COLOR.gray,
              textAlign: "center",
              marginBottom: SIZES.padding,
              ...FONTS.arab1,
            }}
          >
            {item.arab}
          </Text>
          <Text
            style={{
              color: COLOR.danger,
              marginBottom: SIZES.padding,
              ...FONTS.body3,
            }}
          >
            Terjemah
          </Text>
          <Text style={{ color: COLOR.gray, ...FONTS.body2 }}>
            {item.terjemah}
          </Text>
        </View>
      )}
    />
  );
}
