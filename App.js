import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "./lib/colors";
import { fonts } from "./lib/fonts";
import { Provider } from "react-redux";
import store from "./store/store";
import MainNavigator from "./navigation/MainNavigator";
import { init } from "./db";

init()
  .then(() => console.log("DB Initialized"))
  .catch((err) => {
    console.log("Initialization DB failed:");
  });

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <>
          <MainNavigator />
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
