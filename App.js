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
import { FocusHistory } from "./src/features/FocusHistory";
import { Timer } from "./src/features/Timer";
import { colors } from "./src/utils/colors";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);

  return (
    // iosのノッチを避けるためには、SafeAreaViewを使う。(Androidでは機能しない)
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <View style={styles.focus}>
            <Focus addSubject={setCurrentSubject} />
          </View>
          <View style={styles.focusHistory}>
            <FocusHistory history={history} />
          </View>
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(focusSubject) => {
            setHistory([...history, focusSubject]);
          }}
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
  focus: {
    flex: 0.2,
    // backgroundColor: "green"
  },
  focusHistory: {
    flex: 0.6,
    // backgroundColor: "green",
  },
});
