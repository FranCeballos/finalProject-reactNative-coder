import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { cart } from "../../data";
import CartItem from "./CartItem";
import { colors } from "../../colors";

const Cart = () => {
  const totalPrice = cart.reduce((prev, curr) => {
    return curr.price * curr.quantity + prev;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem itemData={item} />}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.confirmContainer}>
        <Button title="Confirm" color="white" />
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "InterBold",
    marginBottom: 20,
  },
  confirmContainer: {
    backgroundColor: colors.mainBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  totalText: {
    color: "white",
    fontFamily: "InterBold",
  },
});

export default Cart;
