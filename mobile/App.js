import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
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
import { DohaHajiScreen } from "./src/screens";

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
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Al Ma'tsurat Sore"
          component={MathuratSoreScreen}
          options={{
            title: "Dzikir Sore",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Hadist Arba'in"
          component={HadistScreen}
          options={{
            title: "Hadist Arba'in",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Doa-doa Pilihan"
          component={DoaPilihanScreen}
          options={{
            title: "Doa-doa Pilihan",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Doa-doa Haji & Umroh"
          component={DohaHajiScreen}
          options={{
            title: "Doa-doa Haji & Umroh",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Doa-doa Sholat"
          component={DoaSholatScreen}
          options={{
            title: "Doa-doa Sholat",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "Setting",
            headerStyle: {
              backgroundColor: "#312c51",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
