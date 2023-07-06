import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const ListItem = ({ itemData, onPress }) => {
  const handlerItemAction = () => {
    onPress(itemData);
  };
  return (
    <Pressable onPress={handlerItemAction}>
      <View
        style={{
          ...styles.container,
          backgroundColor: itemData.isComplete ? "#9AE66E" : "#BAD7E9",
        }}
      >
        <Text style={styles.title}>{itemData.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
    paddingLeft: 20,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 18,
  },
  deleteBox: {
    backgroundColor: "#222831",
    borderRadius: 10,
    padding: 2,
  },
});

export default ListItem;
