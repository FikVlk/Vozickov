import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import FlatButton from "../components/flatButton";
import Reserved from "../screens/detailsScreens/reserved";
import Free from "../screens/detailsScreens/free";

export default function Decision({ route, setForm }) {
  return (
    <View>
      <Text style={styles.text}>Details</Text>

      {!route.params.reserved ? (
        <View>
          <FontAwesome name="circle" size={24} color="green" />
          <Free route={route} />
          <FlatButton text="Rezervace" onPress={() => setForm(true)} />
        </View>
      ) : (
        <View>
          <Entypo name="circle-with-cross" size={24} color="red" />
          <Reserved route={route} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 30,
  },
});
