import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HadistScreen, DetailHadistScreen } from "../screens";
import { COLOR, FONTS } from "../styles";

const Stack = createStackNavigator();

export default function HadistStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Hadist Arba'in"
        component={HadistScreen}
        options={{
          title: "Hadist Arba'in",
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
        name="Detail Hadist"
        component={DetailHadistScreen}
        options={({ route }) => ({
          title: `Hadist ke-${route.params.id}`,
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
