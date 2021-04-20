import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "Setting",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
