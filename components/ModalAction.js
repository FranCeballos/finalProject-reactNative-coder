import { Modal, View, Text, Button, StyleSheet } from "react-native";

const ActionModal = ({
  item,
  onDelete,
  onComplete,
  onIncomplete,
  onCancel,
}) => {
  const deleteItemHandler = () => {
    onDelete(item.id);
  };
  const completeItemHandler = () => {
    onComplete(item.id);
  };
  const incompleteItemHandler = () => {
    onIncomplete(item.id);
  };
  const cancelHandler = () => {
    onCancel();
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={true}>
        <View style={styles.container}>
          <Text style={styles.title}>What do you want to do?</Text>
          <Text style={styles.itemText}>{item.name}</Text>
          <View style={styles.buttonsBox}>
            <Button title="Delete" color="red" onPress={deleteItemHandler} />
            {!item?.isComplete ? (
              <View style={styles.confirmBtnBox}>
                <Button title="Complete" onPress={completeItemHandler} />
              </View>
            ) : (
              <Button title="Incomplete" onPress={incompleteItemHandler} />
            )}
          </View>
          <View style={styles.cancelBtnBox}>
            <Button title="Cancel" onPress={cancelHandler} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    gap: 20,
    color: "#EEEEEE",
  },
  containerBorder: {
    borderColor: "black",
    borderWidth: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  buttonsBox: {
    flexDirection: "row",
    gap: 20,
  },
  cancelBtnBox: {
    position: "absolute",
    bottom: 40,
  },
});

export default ActionModal;
