import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deletedAll } from "../../store/reducers/cartSlice";
import { added } from "../../store/reducers/ordersSlice";
import CartItem from "./CartItem";
import { colors } from "../../lib/colors";
import { usePostOrderMutation } from "../../services/shopService";
import { useState } from "react";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.value.user);
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = cart.reduce((prev, curr) => {
    return curr.price + prev;
  }, 0);
  const [triggerPost, result] = usePostOrderMutation();

  const addOrderHandler = () => {
    if (cart.length > 0) {
      setIsLoading(true);
      triggerPost({
        _id: Math.random(),
        user,
        items: cart,
        totalPrice,
        createdAt: Date.now(),
      });
      dispatch(deletedAll());
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
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
        {isLoading ? (
          <View style={styles.activityContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          <Pressable style={styles.confirmButton} onPress={addOrderHandler}>
            <Text style={styles.confirmText}>
              {cart.length > 0 ? "Confirm" : "Cart empty"}
            </Text>
          </Pressable>
        )}

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
    height: 70,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  totalText: {
    color: "white",
    fontFamily: "InterBold",
  },
  confirmButton: {
    backgroundColor: "transparent",
    padding: 10,
  },
  confirmText: {
    color: "white",
  },
  activityContainer: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart;
