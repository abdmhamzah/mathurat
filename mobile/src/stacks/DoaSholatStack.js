import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaSholatScreen, DetailDoaScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function DoaSholatStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
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
      <Stack.Screen
        name="Detail Doa Sholat"
        component={DetailDoaScreen}
        options={({ route }) => ({
          title: `${route.params.judul}`,
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        })}
      />
    </Stack.Navigator>
  );
}
