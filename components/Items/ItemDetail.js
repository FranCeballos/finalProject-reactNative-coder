import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { added } from "../../store/reducers/cartSlice";
import { images } from "../../lib/images";
import { colors } from "../../lib/colors";
import { useGetProductByIdQuery } from "../../services/shopService";

const ItemDetail = ({ route }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const itemId = route.params.itemId;
  const {
    data: itemDataObj,
    isLoading: itemIsLoading,
    error: itemError,
  } = useGetProductByIdQuery(itemId);
  const [itemData] = itemDataObj ? Object.values(itemDataObj) : [];

  const addToCartHandler = () => {
    setIsLoading(true);
    dispatch(added({ ...itemData, cartId: Math.random() }));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {itemIsLoading ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <Image style={styles.image} source={images[itemData._id]} />
          <View style={styles.actionsBox}>
            <View style={styles.priceBox}>
              <Text style={styles.price}>{`$ ${itemData.price}`}</Text>
            </View>
            {isLoading ? (
              <View style={styles.activityContainer}>
                <ActivityIndicator />
              </View>
            ) : (
              <Pressable style={styles.addToCartBox} onPress={addToCartHandler}>
                <Text style={styles.addToCartText}>Add To Cart</Text>
              </Pressable>
            )}
          </View>
          <Text style={styles.title}>{itemData.title}</Text>
          <Text style={styles.description}>{itemData.description}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: "relative",
    justifyContent: "flex-start",
    alignContent: "center",
    marginTop: 20,
    marginBottom: 300,
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    alignSelf: "center",
  },
  priceBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 90,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.mainBlue,
    marginBottom: 20,
  },
  price: {
    fontFamily: "InterLight",
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  title: {
    fontFamily: "InterBold",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 30,
  },
  description: {
    fontFamily: "InterLight",
    fontSize: 20,
    textAlign: "center",
  },
  actionsBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  addToCartBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 130,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.mainBlue,
    marginBottom: 20,
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
  },
  activityContainer: {
    height: 40,
    width: 130,
  },
});

export default ItemDetail;
