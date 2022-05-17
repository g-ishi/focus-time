import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../utils/colors";

export const FocusHistory = ({ history }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FocusHistory</Text>
      {history.map((subject, i) => {
        return (
          <Text key={i} style={styles.title}>
            {subject}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  // テキストの色は直接Textに当てないと反映されない。
  title: {
    color: colors.white,
  },
});
