import ListItem from "./ListItem";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const List = ({ listData, onModalOn }) => {
  const pressHandler = (item) => {
    onModalOn(item);
  };
  return (
    <View style={styles.container}>
      {listData.length === 0 ? (
        <View style={styles.emptyTextBox}>
          <Text style={styles.emptyText}>No items added.</Text>
        </View>
      ) : (
        <FlatList
          data={listData}
          renderItem={({ item }) => (
            <ListItem itemData={item} onPress={pressHandler} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexShrink: 1,
    position: "relative",
    alignSelf: "stretch",
    marginTop: 30,
    padding: 10,
  },
  emptyTextBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontWeight: 600,
    color: "#EEEEEE",
  },
});

export default List;
