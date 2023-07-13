import { View, Text, StyleSheet } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyTextBox}>
        <Text style={styles.emptyText}>Home</Text>
        <Text style={styles.emptyTextLight}>
          Will be implemented in the future
        </Text>
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
