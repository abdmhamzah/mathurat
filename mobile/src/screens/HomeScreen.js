import React, { useEffect, useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { dataMenu } from "../data/dataMenu";
import { ButtonMenu } from "../components";
import { styles } from "../styles";

export default function HomeScreen({ navigation }) {
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

  function goToSetting() {
    navigation.navigate("Setting");
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
      <View style={styles.home_menu}>
        <FlatList
          numColumns={2}
          data={title}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ButtonMenu title={item.name} logo={item.logo} />
          )}
        />
      </View>
    </View>
  );
}
