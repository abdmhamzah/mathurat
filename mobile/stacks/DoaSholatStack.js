import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaSholatScreen, DetailDoaScreen } from "../screens";
import { COLOR, FONTS } from "../styles";

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
      <Stack.Screen
        name="Detail Doa Sholat"
        component={DetailDoaScreen}
        options={({ route }) => ({
          title: `${route.params.judul}`,
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
        })}
      />
    </Stack.Navigator>
  );
}
