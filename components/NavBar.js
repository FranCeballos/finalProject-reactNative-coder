import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
import { colors } from "../colors";

const NavBar = ({ onChangeView }) => {
  const goToHomeHandler = () => {
    onChangeView("home");
  };
  const goToSearchHandler = () => {
    onChangeView("categories");
  };
  const goToInfoHandler = () => {
    onChangeView("info");
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={goToHomeHandler}>
        <Text style={styles.icons}></Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToSearchHandler}>
        <Text style={styles.icons}></Text>
      </Pressable>
      <Pressable style={styles.button} onPress={goToInfoHandler}>
        <Text style={styles.icons}></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 60,
    flex: 0,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: colors.mainBlue,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 20,
  },
  icons: {
    color: "white",
    fontSize: 20,
    fontFamily: "IcoMoon",
    alignSelf: "center",
  },
  button: {
    height: 60,
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  empty: {
    flex: 1,
  },
});

export default NavBar;
