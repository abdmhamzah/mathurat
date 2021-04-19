import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaHajiScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function DoaHajiStack() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Doa-doa Haji & Umroh"
        component={DoaHajiScreen}
        options={{
          title: "Doa-doa Haji & Umroh",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
