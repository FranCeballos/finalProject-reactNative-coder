import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { images } from "../../images";
import { colors } from "../../colors";
import { items } from "../../data";

const ItemDetail = ({ route }) => {
  const itemId = route.params.itemId;
  const itemData = items.find((item) => item._id === itemId);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={images[itemData._id]} />
      <View style={styles.priceBox}>
        <Text style={styles.price}>{`$ ${itemData.price}`}</Text>
      </View>
      <Text style={styles.title}>{itemData.title}</Text>
      <Text style={styles.description}>{itemData.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default ItemDetail;
