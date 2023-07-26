import { Pressable, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const OrderItem = ({ orderData, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>ID: {orderData._id}</Text>
        <Text>{new Date(orderData.createdAt).toDateString()}</Text>
        <Text style={styles.price}>${orderData.totalPrice}</Text>
      </View>
      <Pressable
        style={styles.deleteButton}
        onPress={() =>
          navigation.navigate("OrderDetail", { orderData: orderData })
        }
      >
        <Ionicons name="search" color="black" size={20} />
      </Pressable>
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
  title: {
    fontFamily: "InterMedium",
  },
  price: {
    fontFamily: "InterLight",
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  deleteButton: {
    padding: 10,
  },
});

export default OrderItem;
