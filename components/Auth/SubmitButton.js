import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { colors } from "../../lib/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 50,
    backgroundColor: colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 50,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "InterBold",
  },
});

export default SubmitButton;
