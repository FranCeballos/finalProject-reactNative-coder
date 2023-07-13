import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const CategoryItem = ({ categoryData, onPress }) => {
  const handlerItemAction = () => {
    onPress(categoryData.title);
  };
  return (
    <Pressable onPress={handlerItemAction}>
      <View style={styles.container}>
        <Text style={styles.title}>{categoryData.title}</Text>
        <Text style={styles.icon}>{categoryData.icon}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 30,
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontFamily: "InterMedium",
    fontSize: 18,
  },
  icon: {
    fontFamily: "PlayStation",
    fontSize: 40,
  },
});

export default CategoryItem;
