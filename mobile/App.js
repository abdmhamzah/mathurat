import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HomeScreen,
  MathuratPagiScreen,
  MathuratSoreScreen,
  SettingScreen,
  DoaHajiScreen,
  DoaPilihanScreen,
  DoaSholatScreen,
  HadistScreen,
} from "./src/screens";
import { styles, basic } from "./src/styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
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
          name="Doa-doa Pilihan"
          component={DoaPilihanScreen}
          options={{
            title: "Doa-doa Pilihan",
            headerStyle: styles.header_bar,
            headerTintColor: basic,
            headerTitleStyle: styles.header_title,
          }}
        />
        <Stack.Screen
          name="Doa-doa Haji & Umroh"
          component={DoaHajiScreen}
          options={{
            title: "Doa-doa Haji & Umroh",
            headerStyle: styles.header_bar,
            headerTintColor: basic,
            headerTitleStyle: styles.header_title,
          }}
        />
        <Stack.Screen
          name="Doa-doa Sholat"
          component={DoaSholatScreen}
          options={{
            title: "Doa-doa Sholat",
            headerStyle: styles.header_bar,
            headerTintColor: basic,
            headerTitleStyle: styles.header_title,
          }}
        />
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
