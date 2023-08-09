import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deletedAll } from "../../store/reducers/cartSlice";
import { added } from "../../store/reducers/ordersSlice";
import CartItem from "./CartItem";
import { colors } from "../../colors";
import { usePostOrderMutation } from "../../services/shopService";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = cart.reduce((prev, curr) => {
    return curr.price + prev;
  }, 0);
  const [triggerPost, result] = usePostOrderMutation();

  const addOrderHandler = () => {
    if (cart.length > 0)
      triggerPost({
        _id: Math.random(),
        items: cart,
        totalPrice,
        createdAt: Date.now(),
      });
    dispatch(deletedAll());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartItem itemData={item} />}
        keyExtractor={(item) => item.cartId}
      />
      <View style={styles.confirmContainer}>
        <Button title="Confirm" color="white" onPress={addOrderHandler} />
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
