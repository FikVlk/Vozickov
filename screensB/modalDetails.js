import React from "react";
import { StyleSheet, Button, View } from "react-native";
import { globalStyles } from "../Styles/globalStyles";

export default function ModalDetails({ closeModal, navigation, id }) {
  return (
    <View style={globalStyles.container}>
      <Text style={styles.boldText}>Modal</Text>
      <View style={{ marginTop: 50 }}>
        <Button title="Close" onPress={closeModal} />
        <Button
          title="Reserve"
          onPress={() =>
            navigation.navigate("Home", {
              key: id,
              reserved: true,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  boldText: {
    fontFamily: "Nunito_700Bold",
    fontSize: 24,
  },
});
