import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./colors";
import { fonts } from "./fonts";
import TabNavigator from "./navigation/TabNavigator";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <>
          <TabNavigator />
          <StatusBar />
        </>
      </SafeAreaProvider>
    </Provider>
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
