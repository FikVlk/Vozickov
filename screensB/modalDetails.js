import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function ModalDetails({ closeModal, navigation, id }) {
  return (
    <View>
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

const styles = StyleSheet.create({});
