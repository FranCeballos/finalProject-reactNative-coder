import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputForm = ({ label, onChange, error = "", isSecure = false }) => {
  const [input, setInput] = useState("");
  const onChangeTextHandler = (text) => {
    setInput(text);
    onChange(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={onChangeTextHandler}
        secureTextEntry={isSecure}
        placeholder={label}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
    marginBottom: 10,
  },
  error: {
    width: "95%",
    fontSize: 14,
    color: "red",
    fontFamily: "InterMedium",
  },
  input: {
    backgroundColor: "#ddd",
    height: 45,
    alignSelf: "stretch",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default InputForm;
