import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screensB/about";
import MenuButton from "../components/drawMenu";

const Stack = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerLeft: () => <MenuButton navigation={navigation} /> }}
      />
    </Stack.Navigator>
  );
}
