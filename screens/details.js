import React, { useState } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import { globalStyles } from "../Styles/globalStyles";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Card from "../components/card";
import FlatButton from "../components/flatButton";
import ModalDetails from "./modalDetails";

export default function details({ navigation, route }) {
  const [state, setState] = useState(false);

  const closeModal = () => {
    setState(false);
  };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.nadpis}>Details</Text>
        <Text>{route.params.title}</Text>
        <Text>{route.params.body}</Text>
        <View>
          {!route.params.reserved ? (
            <View>
              <FontAwesome name="circle" size={24} color="green" />
              <Modal animationType="slide" visible={state}>
                <ModalDetails
                  closeModal={() => closeModal()}
                  // ??? DODELAT
                  //reserveCar={reserveCar}
                  navigation={navigation}
                  id={route.params.key}
                />
              </Modal>
            </View>
          ) : (
            <Entypo name="circle-with-cross" size={24} color="red" />
          )}
        </View>
      </Card>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        {!route.params.reserved === true && (
          <FlatButton text="Reserve" onPress={() => setState(true)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nadpis: {
    fontFamily: "Nunito_700Bold",
    fontSize: 23,
  },
});
