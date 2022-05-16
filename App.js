import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Focus } from "./src/features/Focus";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);

  return (
    // iosのノッチを避けるためには、SafeAreaViewを使う。(Androidでは機能しない)
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={() => {}}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // android向けにステータスあb−を避けるためには、以下のコードを記述する。
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white,
  },
});
