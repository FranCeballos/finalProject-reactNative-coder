import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  Button,
  Pressable,
} from "react-native";
import { colors } from "../../colors";

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputValidationError, setInputValidationError] = useState(false);
  const onClearHandler = () => {
    setInputValue("");
  };
  useEffect(() => {
    console.log("input value in search comp", inputValue);
    onSearch(inputValue.trim().toLowerCase());
    setInputValidationError(false);
  }, [inputValue]);
  return (
    <View style={styles.container}>
      <TextInput
        style={inputValidationError ? styles.inputError : styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Search..."
      />
      {inputValue !== "" ? (
        <Pressable style={styles.errasePressable} onPress={onClearHandler}>
          <Text style={styles.erraseIcon}></Text>
        </Pressable>
      ) : (
        <View></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#ddd",
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
  errasePressable: {
    padding: 10,
  },
  erraseIcon: {
    fontFamily: "IcoMoon",
    color: colors.mainBlue,
  },
});

export default SearchInput;
