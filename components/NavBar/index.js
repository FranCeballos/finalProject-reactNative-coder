import { Button, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const NavBar = ({ onDeleteAll }) => {
  const insets = useSafeAreaInsets();
  const onDeleteAllHandler = () => {
    onDeleteAll();
  };
  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top * 1,
        paddingBottom: insets.top * 0.5,
      }}
    >
      <Text style={styles.emptyLeftText}></Text>
      <Text style={styles.title}>MyToDoApp</Text>
      <View style={styles.clearButtonBox}>
        <View style={styles.clearButtonPadding}>
          <Button title="Clear All" color="red" onPress={onDeleteAllHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
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
});

export default NavBar;
