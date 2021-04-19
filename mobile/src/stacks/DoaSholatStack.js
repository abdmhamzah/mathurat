import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaSholatScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function DoaSholatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Doa-doa Sholat"
        component={DoaSholatScreen}
        options={{
          title: "Doa-doa Sholat",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
