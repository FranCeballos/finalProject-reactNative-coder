import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../colors";
import OrderItem from "./OrderItem";
import { useGetOrdersQuery } from "../../services/shopService";

const Orders = ({ navigation }) => {
  const user = useSelector((state) => state.auth.value.user);
  const {
    data: orders,
    isLoading: ordersAreLoading,
    error,
  } = useGetOrdersQuery(user);
  const ordersArray = orders ? Object.values(orders) : [];
  console.log("orders", orders);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      {ordersAreLoading ? (
        <ActivityIndicator />
      ) : ordersArray ? (
        <FlatList
          data={ordersArray}
          renderItem={({ item }) => (
            <OrderItem orderData={item} navigation={navigation} />
          )}
          keyExtractor={(order) => order._id}
        />
      ) : (
        <Text>No orders made.</Text>
      )}
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

export default Orders;
