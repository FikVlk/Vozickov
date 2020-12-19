import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Free({ route }) {
  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
