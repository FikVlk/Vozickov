import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { globalStyles } from "../../Styles/globalStyles";
import FlatButton from "../../components/flatButton";

export default function FormInput({ navigation, setItemFalse }) {
  return <Button title="Submit" onPress={() => setItemFalse(false)} />;
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
