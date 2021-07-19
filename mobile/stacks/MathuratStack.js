import React, { useContext, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MathuratScreen } from "../screens";
import { COLOR, FONTS } from "../styles";
import { SettingContext } from "../contexts/SettingProvider";

const Stack = createStackNavigator();

export default function MathuratPagiStack(props) {
  const { isKubro, isPagi, setIsPagi } = useContext(SettingContext);
  const { id } = props.route.params;

  useEffect(() => {
    if (id === "1") {
      setIsPagi(true);
    } else {
      setIsPagi(!isPagi);
    }
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Al Ma'tsurat"
        component={MathuratScreen}
        options={{
          title: `Ma'tsurat ${isPagi ? "Pagi" : "Sore"} ${
            isKubro ? "Kubro" : "Sughra"
          }`,
          headerStyle: {
            backgroundColor: COLOR.primary,
            shadowColor: COLOR.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTintColor: COLOR.gray,
          headerTitleStyle: { ...FONTS.h2 },
        }}
      />
    </Stack.Navigator>
  );
}
