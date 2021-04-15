import React, { useState } from "react";
import { Dimensions, StyleSheet, View, FlatList } from "react-native";

// components
import { ButtonMenu } from "../components";

const screenHeight = Dimensions.get("screen").height;

export default function Home(props) {
  const [title, setTitle] = useState([
    { id: "1", name: `Al Ma'tsurat Pagi`, logo: require("../assets/sun.png") },
    {
      id: "2",
      name: `Al Ma'tsurat Sore`,
      logo: require("../assets/half-moon.png"),
    },
    {
      id: "3",
      name: `Hadist Arba'in`,
      logo: require("../assets/rub-el-hizb.png"),
    },
    { id: "4", name: `Doa-doa Pilihan`, logo: require("../assets/window.png") },
    {
      id: "4",
      name: `Doa-doa Haji & Umroh`,
      logo: require("../assets/Mecca.png"),
    },
    { id: "4", name: `Doa-doa Sholat`, logo: require("../assets/isha.png") },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={title}
        renderItem={({ item }) => (
          <ButtonMenu title={item.name} logo={item.logo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#48426d",
    justifyContent: "center",
    alignItems: "center",
  },
});
