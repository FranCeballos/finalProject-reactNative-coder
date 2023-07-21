import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyTextBox}>
        <Text style={styles.emptyText}>Home</Text>
        <Button
          title="Search Categories"
          onPress={() => navigation.navigate("Search")}
        />
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
  },
  emptyTextBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  emptyText: {
    fontFamily: "InterBold",
    color: "black",
  },
  emptyTextLight: {
    fontFamily: "InterLight",
    color: "black",
  },
});

export default Home;
