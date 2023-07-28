import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { colors } from "../../colors";
import OrderItem from "./OrderItem";

const Orders = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <OrderItem orderData={item} navigation={navigation} />
        )}
        keyExtractor={(order) => order._id}
      />
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
