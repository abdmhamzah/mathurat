import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HadistScreen, DetailHadistScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function HadistStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Hadist Arba'in"
        component={HadistScreen}
        options={{
          title: "Hadist Arba'in",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
      <Stack.Screen
        name="Detail Hadist"
        component={DetailHadistScreen}
        options={({ route }) => ({
          title: `Hadist ke-${route.params.id}`,
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        })}
      />
    </Stack.Navigator>
  );
}
