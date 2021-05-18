import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
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
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding,
      }}
    >
      <View
        style={{
          height: 155,
          width: SIZES.width / 2 - SIZES.padding * 3,
          backgroundColor: COLOR.primary,
          padding: SIZES.padding,
          borderRadius: SIZES.padding,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={props.logo}
          style={{
            height: SIZES.width / 5,
            width: SIZES.width / 5,
            marginBottom: SIZES.padding2,
          }}
        />
        <Text style={{ color: COLOR.warning, textAlign: "center", ...FONTS.h4 }}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
