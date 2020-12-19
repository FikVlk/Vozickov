import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Reserved({ route }) {
  return (
    <View>
      <Text>{route.params.title}</Text>
      <Text>{route.params.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
