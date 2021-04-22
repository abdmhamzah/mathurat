import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MathuratPagiScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function MathuratPagiStack() {
  const [isKubro, setIsKubro] = useState(false);

  async function getKubro() {
    const jsonValue = await AsyncStorage.getItem("kubro");
    const { value } = JSON.parse(jsonValue);
    setIsKubro(value);
  }

  useEffect(() => {
    getKubro();
  }, [isKubro]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Al Ma'tsurat Pagi"
        component={MathuratPagiScreen}
        options={{
          title: `Ma'tsurat Pagi ${isKubro ? "Kubro" : "Sughra"}`,
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
