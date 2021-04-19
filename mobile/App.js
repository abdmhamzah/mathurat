import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SettingScreen } from "./src/screens";
import {
  DoaHajiStack,
  DoaPilihanStack,
  DoaSholatStack,
  HadistStack,
  HomeStack,
  MathuratPagiStack,
  MathuratSoreStack,
} from "./src/stacks";
import { styles, basic } from "./src/styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Al Ma'tsurat Pagi" component={MathuratPagiStack} />
        <Stack.Screen name="Al Ma'tsurat Sore" component={MathuratSoreStack} />
        <Stack.Screen name="Hadist Arba'in" component={HadistStack} />
        <Stack.Screen name="Doa-doa Pilihan" component={DoaPilihanStack} />
        <Stack.Screen name="Doa-doa Haji & Umroh" component={DoaHajiStack} />
        <Stack.Screen name="Doa-doa Sholat" component={DoaSholatStack} />
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
    </NavigationContainer>
  );
}
