import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ItemList from "./itemList";
import Card from "../components/card";
import { globalStyles } from "../Styles/globalStyles";

export default function home({ navigation }) {
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

  const reserveCar = () => {
    console.log("yes");
  };

  return (
    <View styles={globalStyles.container}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Card>
            <ItemList item={item} navigation={navigation} />
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
