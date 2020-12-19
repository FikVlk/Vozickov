import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import Details from "../screens/details";
import MenuButton from "../components/drawMenu";

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => <MenuButton navigation={navigation} />,
        }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
