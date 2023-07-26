import { useFonts } from "expo-font";
import HeaderView from "./components/Header/index";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./colors";
import { fonts } from "./fonts";
import TabNavigator from "./navigation/TabNavigator";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <>
        <TabNavigator />
        <StatusBar />
      </>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainWhite,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
