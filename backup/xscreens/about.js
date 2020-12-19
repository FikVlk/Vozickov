import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../Styles/globalStyles";
import Card from "../components/card";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>about</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({});
