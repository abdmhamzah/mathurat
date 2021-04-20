import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DoaPilihanScreen } from "../screens";
import { styles, basic } from "../styles";

const Stack = createStackNavigator();

export default function DoaPilihanStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Doa-doa Pilihan"
        component={DoaPilihanScreen}
        options={{
          title: "Doa-doa Pilihan",
          headerStyle: styles.header_bar,
          headerTintColor: basic,
          headerTitleStyle: styles.header_title,
        }}
      />
    </Stack.Navigator>
  );
}
