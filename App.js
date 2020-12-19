import React from "react";
import { StyleSheet } from "react-native";
import DrawRoutes from "./routes/drawRoutes";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <DrawRoutes />;
  }
}

const styles = StyleSheet.create({});
