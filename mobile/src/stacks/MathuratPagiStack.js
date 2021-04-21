import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MathuratPagiScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function MathuratPagiStack() {
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
          title: "Dzikir Pagi",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
