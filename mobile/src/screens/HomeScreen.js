import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { dataMenu } from "../data/dataMenu";
import { ButtonMenu } from "../components";

export default function Home(props) {
  const [title, setTitle] = useState(dataMenu);

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
