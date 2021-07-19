import React, { useContext, useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ButtonMenu } from "../components";
import { FONTS, COLOR, SIZES } from "../styles";
import { DataContext } from "../contexts/DataProvider";

export default function HomeScreen({ navigation }) {
  const [currentTime, setCurrentTime] = useState("");
  const { menu } = useContext(DataContext);

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date().getHours());
  }

  function goToSetting() {
    navigation.navigate("Setting");
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLOR.secondary }}>
      <View
        style={{
          flex: 1.15,
          alignItems: "flex-end",
          flexDirection: "row",
          backgroundColor: COLOR.primary,
          paddingHorizontal: SIZES.padding * 2,
          paddingBottom: SIZES.padding * 2,
          shadowOffset: { width: 0, height: 2 },
          shadowColor: COLOR.black,
        }}
      >
        <Text style={{ flex: 1, color: COLOR.danger, ...FONTS.h1 }}>
          {parseInt(currentTime) < 11
            ? "Selamat Pagi 🌅"
            : "" || (11 <= parseInt(currentTime) && parseInt(currentTime) < 15)
            ? "Selamat Siang 🌞"
            : "" || (15 <= parseInt(currentTime) && parseInt(currentTime) < 18)
            ? "Selamat Sore 🌄"
            : "" || parseInt(currentTime) >= 18
            ? "Selamat Malam 🌝"
            : ""}{" "}
        </Text>
        <TouchableOpacity onPress={goToSetting}>
          <FontAwesome
            name="cog"
            size={30}
            style={{ color: COLOR.danger, textAlign: "right", marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8.85, alignItems: "center" }}>
        <FlatList
          numColumns={2}
          data={menu}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: SIZES.padding,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ButtonMenu id={item.id} title={item.name} logo={item.logo} />
          )}
        />
      </View>
    </View>
  );
}
