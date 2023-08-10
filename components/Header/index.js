import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { clearUser } from "../../store/reducers/authSlice";
import { images } from "../../images";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HeaderView = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
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
      <View style={styles.clearButtonBox}>
        <Pressable
          onPress={() => dispatch(clearUser())}
          style={styles.logoutPressable}
        >
          <Text style={styles.logoutIcon}></Text>
        </Pressable>
      </View>
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
  logoutPressable: {},
  logoutIcon: {
    fontFamily: "IcoMoon",
    fontSize: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default HeaderView;
