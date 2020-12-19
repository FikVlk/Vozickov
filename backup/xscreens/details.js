import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { globalStyles } from "../Styles/globalStyles";
import FlatButton from "../components/flatButton";
import FormInput from "./detailsScreens/formInput";
import Card from "../components/card";
import Decision from "../components/decision";

export default function Details({ route, change }) {
  const [form, setForm] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Card>
        <Decision route={route} setForm={setForm} />
        <FlatButton text="change" onPress={() => change(route.params.key)} />
      </Card>

      {/* <Modal animationType="slide" visible={form}>
        <View style={globalStyles.container}>
          <FlatButton text="Zavrit" onPress={() => setForm(false)} />
        </View>
      </Modal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Nunito_400Regular",
    fontSize: 30,
  },
});
