import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import {
  AsmaulHusnaStack,
  DoaHajiStack,
  DoaPilihanStack,
  DoaSholatStack,
  DzikirCounterStack,
  HadistStack,
  HomeStack,
  MathuratStack,
  SettingStack,
} from "./stacks";
import { COLOR } from "./styles";
import { SettingProvider } from "./contexts/SettingProvider";
import { DataProvider } from "./contexts/DataProvider";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    circularBold: require("./assets/fonts/lineto-circular-black.ttf"),
    circular: require("./assets/fonts/lineto-circular-book.ttf"),
    lateef: require("./assets/fonts/Lateef-Regular.ttf"),
    uthmani: require("./assets/fonts/Uthmanic-Regular.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SettingProvider>
      <DataProvider>
        <NavigationContainer
          theme={{ colors: { background: COLOR.secondary } }}
        >
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={HomeStack} />
            <Stack.Screen name="Al Ma'tsurat" component={MathuratStack} />
            <Stack.Screen name="Hadist Arba'in" component={HadistStack} />
            <Stack.Screen
              name="Dzikir Counter"
              component={DzikirCounterStack}
            />
            <Stack.Screen
              name="Doa-doa Haji & Umroh"
              component={DoaHajiStack}
            />
            <Stack.Screen name="Asmaul Husna" component={AsmaulHusnaStack} />
            <Stack.Screen name="Doa-doa Sholat" component={DoaSholatStack} />
            <Stack.Screen name="Doa-doa Pilihan" component={DoaPilihanStack} />
            <Stack.Screen name="Setting" component={SettingStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </SettingProvider>
  );
}
