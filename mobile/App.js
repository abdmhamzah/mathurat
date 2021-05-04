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
  MathuratPagiStack,
  MathuratSoreStack,
  SettingStack,
} from "./src/stacks";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    circularBold: require("./src/fonts/lineto-circular-black.ttf"),
    circular: require("./src/fonts/lineto-circular-book.ttf"),
    lateef: require("./src/fonts/Lateef-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer theme={{ colors: { background: "#48426d" } }}>
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
        <Stack.Screen name="Dzikir Counter" component={DzikirCounterStack} />
        <Stack.Screen name="Doa-doa Haji & Umroh" component={DoaHajiStack} />
        <Stack.Screen name="Asmaul Husna" component={AsmaulHusnaStack} />
        <Stack.Screen name="Doa-doa Sholat" component={DoaSholatStack} />
        <Stack.Screen name="Doa-doa Pilihan" component={DoaPilihanStack} />
        <Stack.Screen name="Setting" component={SettingStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
