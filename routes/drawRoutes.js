import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawRoutes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            drawerIcon: () => <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            drawerIcon: () => (
              <AntDesign name="infocirlce" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
