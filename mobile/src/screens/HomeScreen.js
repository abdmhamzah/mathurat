import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, FlatList } from "react-native";
import { ButtonMenu } from "../components";

const screenHeight = Dimensions.get("screen").height;

export default function Home(props) {
  const [title, setTitle] = useState([
    { id: "1", name: `Al Ma'tsurat Pagi` },
    { id: "2", name: `Al Ma'tsurat Sore` },
    { id: "3", name: `Hadist Arbain` },
    { id: "4", name: `Doa-doa Pilihan` },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={title}
        renderItem={({ item }) => <ButtonMenu title={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#48426d",
    justifyContent: "center",
    alignItems: "center",
  },
});
