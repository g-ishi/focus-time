import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputContainer}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(subject)}
            style={styles.button}
            title="+"
            size={50}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 0.9,
    marginRight: 10,
  },
  inputContainer: {
    padding: 10,
    // justifyContent: "top",
    flexDirection: "row",
  },
});
