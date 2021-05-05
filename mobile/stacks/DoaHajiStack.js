import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaHajiScreen } from "../screens";
import { COLOR, FONTS } from "../styles";

const Stack = createStackNavigator();

export default function DoaHajiStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Doa-doa Haji & Umroh"
        component={DoaHajiScreen}
        options={{
          title: "Doa-doa Haji & Umroh",
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
