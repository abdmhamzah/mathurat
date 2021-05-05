import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FONTS, SIZES, COLOR } from "../styles";

export default function CardMenu(props) {
  const navigation = useNavigation();

  function goToTitle() {
    navigation.navigate(props.title);
  }

  return (
    <TouchableOpacity
      onPress={goToTitle}
      style={{
        flex: 1,
        backgroundColor: COLOR.primary,
        width: SIZES.base * 9,
        marginHorizontal: SIZES.padding * 2,
        marginVertical: SIZES.padding * 2,
        paddingVertical: SIZES.padding * 2,
        alignItems: "center",
        borderRadius: 8,
      }}
    >
      <Image
        source={props.logo}
        style={{
          height: SIZES.padding * 9,
          width: SIZES.padding * 9,
          marginBottom: SIZES.padding2,
        }}
      />
      <Text style={{ color: COLOR.warning, textAlign: "center", ...FONTS.h4 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
