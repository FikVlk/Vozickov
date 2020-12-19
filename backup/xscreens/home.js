import React, { useState } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../Styles/globalStyles";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Card from "../components/card";
import FlatButton from "../components/flatButton";

export default function Home({ navigation, setItemFalse }) {
  const [list, setList] = useState([
    {
      title: "Kishal",
      body: "asdasdd",
      reserved: true,
      key: "1",
    },
    {
      title: "Kishal",
      body: "asdasdd",
      reserved: false,
      key: "2",
    },
  ]);

  // function change(key) {
  //   return console.log(key);
  // }

  return (
    <View style={globalStyles.container}>
      <Entypo name="camera" size={24} color="black" />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Card>
            <View style={styles.card}>
              <FlatButton
                text={"Details"}
                onPress={() => navigation.navigate("Details", item)}
                //   change={change}
              />
              <Text>{item.title}</Text>
              <Text>{item.body}</Text>
              <View>
                {!item.reserved ? (
                  <FontAwesome name="circle" size={24} color="green" />
                ) : (
                  <Entypo name="circle-with-cross" size={24} color="red" />
                )}
              </View>
            </View>
          </Card>
        )}
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
