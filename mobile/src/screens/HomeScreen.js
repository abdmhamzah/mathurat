import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { FontAwesome } from "@expo/vector-icons";
import { dataMenu } from "../data/dataMenu";
import { ButtonMenu } from "../components";
import { styles } from "../styles";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [title, setTitle] = useState(dataMenu);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date().getHours());
  }

  let [fontsLoaded] = useFonts({
    circularBold: require("../fonts/lineto-circular-black.ttf"),
  });

  function goToSetting() {
    navigation.navigate("Setting");
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.home_headbar}>
        <Text style={styles.home_title}>
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
          <FontAwesome name="cog" size={30} style={styles.home_setting} />
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={title}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ButtonMenu title={item.name} logo={item.logo} />
        )}
      />
    </View>
  );
}
