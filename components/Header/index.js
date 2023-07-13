import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "../../images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderView = () => {
  const insets = useSafeAreaInsets();
  const onDeleteAllHandler = () => {
    onDeleteAll();
  };
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top * 1.25,
        paddingBottom: insets.top * 0.5,
      }}
    >
      <Text style={styles.emptyLeftText}></Text>
      <Image style={styles.logo} source={images.logo} />
      <View style={styles.clearButtonBox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 0,
  },
  emptyLeftText: {
    flex: 1,
  },
  clearButtonBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  clearButtonPadding: {
    paddingRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    color: "#222831",
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default HeaderView;
