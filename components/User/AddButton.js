import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../colors";

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.mainBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "InterSemiBold",
    color: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default AddButton;
