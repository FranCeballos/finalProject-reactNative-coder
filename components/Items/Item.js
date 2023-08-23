import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { images } from "../../lib/images";

const Item = ({ itemData, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("Detail", { itemId: itemData._id })}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={images[itemData._id]} />
        <Text style={styles.title}>{itemData.title}</Text>
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
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  title: {
    fontFamily: "InterMedium",
    fontSize: 15,
    flexWrap: "wrap",
    flex: 1,
    textAlign: "right",
  },
  icon: {
    fontFamily: "PlayStation",
    fontSize: 40,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 20,
  },
});

export default Item;
