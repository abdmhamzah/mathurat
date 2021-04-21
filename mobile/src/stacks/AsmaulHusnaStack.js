import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AsmaulHusnaScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function AsmaulHusnaStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Asmaul Husna"
        component={AsmaulHusnaScreen}
        options={{
          title: "Asmaul Husna",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
