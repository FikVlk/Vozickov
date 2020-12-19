import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function flatButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.text}>
        <Text style={{ fontFamily: "Nunito_400Regular", fontSize: 18 }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
  },
  button: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#888888",
    padding: 8,
    width: 120,
    backgroundColor: "#eee",
    shadowOffset: { width: 1, height: 2 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
