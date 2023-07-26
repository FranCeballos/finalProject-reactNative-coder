import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CartItem from "../Cart/CartItem";
import { colors } from "../../colors";

const OrderDetail = ({ route }) => {
  const orderData = route.params.orderData;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order {orderData._id}</Text>
      <FlatList
        data={orderData.items}
        renderItem={({ item }) => (
          <CartItem itemData={item} isCartList={false} />
        )}
        keyExtractor={(item) => item._id}
      />
      <View style={styles.confirmContainer}>
        <Text style={styles.totalText}>Total: ${orderData.totalPrice}</Text>
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

export default OrderDetail;
