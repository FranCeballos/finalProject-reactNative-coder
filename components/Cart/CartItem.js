import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { images } from "../../images";

const CartItem = ({ itemData, isCartList = true }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images[itemData._id]} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{itemData.title}</Text>
        <View style={styles.subInfoContainer}>
          <Text style={styles.price}>${itemData.price}</Text>
          <Text style={styles.qty}>Qty: {itemData.quantity}</Text>
        </View>
      </View>
      {isCartList && (
        <Pressable style={styles.deleteButton}>
          <Ionicons name="trash" color="black" size={20} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
    gap: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  subInfoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: "InterMedium",
  },
  price: {
    fontFamily: "InterLight",
  },
  qty: {},
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  deleteButton: {
    padding: 10,
  },
});

export default CartItem;
