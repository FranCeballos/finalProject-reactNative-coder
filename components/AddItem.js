import { useState } from "react";
import { TextInput, View, StyleSheet, Text, Button } from "react-native";

const AddItem = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValidationError, setInputValidationError] = useState(false);
  const onAddHandler = () => {
    if (inputValue.trim() === "") {
      setInputValidationError(true);
      return;
    }
    onAdd(inputValue);
    setInputValue("");
    setInputValidationError(false);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={inputValidationError ? styles.inputError : styles.input}
        onChangeText={setInputValue}
        value={inputValue}
      />
      <Button color="white" title="Add" onPress={onAddHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#393E46",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  input: {
    backgroundColor: "white",
    height: "50%",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  inputError: {
    backgroundColor: "white",
    height: "50%",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
  },
});

export default AddItem;
