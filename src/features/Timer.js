import React, { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { ProgressBar, Colors } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";
import { Countdown } from "../components/Countdown";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";
import { colors } from "../utils/colors";
import { Timing } from "./Timing";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minites, setMinites] = useState(0.1);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minites}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={(reset) => {
            Vibration.vibrate(PATTERN);
            setIsStarted(false);
            setProgress(1);
            onTimerEnd(focusSubject);
            reset();
          }}
        />
        <View style={{ paddingTop: spacing.lg }}>
          <Text style={styles.title}>Focusing on:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.white}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timing}>
        <Timing onChangeTime={setMinites} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
              Vibration.vibrate(PATTERN);
            }}
          />
        ) : (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
      </View>
      <View style={styles.cancelButton}>
        <RoundedButton
          title="-"
          size={80}
          onPress={clearSubject}
          // onPress={() => {
          //   clearSubject();
          // }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonWrapper: {
    // backgroundColor: colors.white,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: {
    color: Colors.white,
    textAlign: "center",
  },
  timing: {
    flex: 0.2,
    // backgroundColor: "green",
  },
  cancelButton: {
    flex: 0.2,
    // backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
});
