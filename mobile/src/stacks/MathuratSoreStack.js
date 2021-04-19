import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MathuratSoreScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function MathuratSoreStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Al Ma'tsurat Sore"
        component={MathuratSoreScreen}
        options={{
          title: "Dzikir Sore",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
