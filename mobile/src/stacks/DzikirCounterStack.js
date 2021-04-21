import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DzikirCounterScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function DzikirCounterStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Dzikir Counter"
        component={DzikirCounterScreen}
        options={{
          title: "Dzikir Counter",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
