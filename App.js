import { useState } from "react";
import ModalAction from "./components/ModalAction";
import NavBar from "./components/NavBar";
import List from "./components/List/index";
import AddItem from "./components/AddItem";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const initialModalObj = {
  isOpen: false,
  item: {},
};
export default function App() {
  const [listData, setListData] = useState([]);
  const [modalVisible, setModalVisible] = useState(initialModalObj);
  console.log(listData);

  const addHandler = (item) => {
    setListData((prev) => {
      return [
        ...prev,
        { name: item, id: Math.random().toString(), isComplete: false },
      ];
    });
    Keyboard.dismiss();
  };

  const deleteAllHandler = () => {
    setListData([]);
  };

  const deleteOneHandler = (id) => {
    setListData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
    setModalVisible(initialModalObj);
  };

  const toggleComplete = (id) => {
    setListData((prev) => {
      return prev.map((item) => {
        const currentItem = item;
        if (currentItem.id === id) {
          currentItem.isComplete = !currentItem.isComplete;
          return currentItem;
        }

        return item;
      });
    });
  };

  const completeItemHandler = (id) => {
    toggleComplete(id);
    setModalVisible(initialModalObj);
  };

  const incompleteItemHandler = (id) => {
    toggleComplete(id);
    setModalVisible(initialModalObj);
  };

  const modalOnHandler = (item) => {
    setModalVisible({ isOpen: true, item });
  };

  const modalOffHandler = () => {
    setModalVisible(initialModalObj);
  };

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <NavBar onDeleteAll={deleteAllHandler} />
            <List listData={listData} onModalOn={modalOnHandler} />
            <AddItem onAdd={addHandler} />
            {modalVisible.isOpen && (
              <ModalAction
                item={modalVisible.item}
                onDelete={deleteOneHandler}
                onComplete={completeItemHandler}
                onIncomplete={incompleteItemHandler}
                onCancel={modalOffHandler}
              />
            )}
            <StatusBar />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222831",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
