import React from "react";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timing}>
      <RoundedButton
        title="5"
        size={80}
        onPress={() => {
          onChangeTime(5);
        }}
      />
      <RoundedButton
        title="10"
        size={80}
        onPress={() => {
          onChangeTime(10);
        }}
      />
      <RoundedButton
        title="15"
        size={80}
        onPress={() => {
          onChangeTime(15);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timing: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
});
