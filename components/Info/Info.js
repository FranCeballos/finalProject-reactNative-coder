import { View, Text, StyleSheet } from "react-native";

const Info = () => {
  return (
    <View style={styles.container}>
      <View style={styles.emptyTextBox}>
        <Text style={styles.emptyText}>Creado por Francisco Ceballos</Text>
        <Text style={styles.emptyTextLight}>Imagenes de PlayStation</Text>
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

export default Info;
