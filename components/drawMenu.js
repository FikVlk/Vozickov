import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function drawButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Entypo name="menu" size={34} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: { paddingLeft: 20, justifyContent: "center" },
});
