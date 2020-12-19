import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FlatButton from "../components/flatButton";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function ItemList({ item, navigation }) {
  return (
    <View style={styles.card}>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
      <View>
        {!item.reserved ? (
          <FontAwesome name="circle" size={24} color="green" />
        ) : (
          <Entypo name="circle-with-cross" size={24} color="red" />
        )}
      </View>
      <FlatButton
        text={"Press"}
        onPress={() => navigation.navigate("Details", item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
