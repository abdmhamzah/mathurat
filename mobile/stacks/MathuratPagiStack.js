import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MathuratPagiScreen } from "../screens";
import { COLOR, FONTS } from "../styles";

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
          headerStyle: {
            backgroundColor: COLOR.primary,
            shadowColor: COLOR.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTintColor: COLOR.gray,
          headerTitleStyle: { ...FONTS.h2 },
        }}
      />
    </Stack.Navigator>
  );
}
