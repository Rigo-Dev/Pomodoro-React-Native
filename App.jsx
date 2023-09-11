import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { GlobalContext } from "./src/context/GlobalContext";
import HomeView from "./src/views/HomeView";

export default function App() {
  return (
    <GlobalContext>
      <SafeAreaView style={styles.container}>
        <HomeView></HomeView>
      </SafeAreaView>
    </GlobalContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
