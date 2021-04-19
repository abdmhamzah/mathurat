import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { dataMenu } from "../data/dataMenu";
import { ButtonMenu } from "../components";
import { styles } from "../styles";

export default function HomeScreen(props) {
  const [title, setTitle] = useState(dataMenu);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.menu}
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
