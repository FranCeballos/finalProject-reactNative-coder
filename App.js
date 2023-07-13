import { useCallback, useEffect, useState } from "react";
import HeaderView from "./components/Header/index";
import CategoriesList from "./components/Categories/CategoriesList";
import ItemsList from "./components/Items/ItemsList";
import ItemDetail from "./components/Items/ItemDetail";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
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
import { items, categories } from "./data";
import { colors } from "./colors";
import { useFonts } from "expo-font";
import { fonts } from "./fonts";
import Info from "./components/Info/Info";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  const [view, setView] = useState("categories");
  const [categorySelected, setCategorySelected] = useState(null);
  const [itemSelected, setItemSelected] = useState(null);

  const changeViewHandler = (view, data) => {
    if (view === "category") {
      const categoryInfo = categories.find(
        (cat) => cat.title === data.category
      );
      setCategorySelected(
        categories.find((cat) => cat.title === data.category)
      );
    }
    if (view === "detail") {
      const itemInfo = items.find((item) => item._id === data.itemId);
      setItemSelected(itemInfo);
    }
    setView(view);
  };

  let viewComponent;
  switch (view) {
    case "categories":
      viewComponent = (
        <CategoriesList
          categories={categories}
          onChangeView={changeViewHandler}
          allItems={items}
        />
      );
      break;
    case "category":
      let filteredItems = items;
      if (categorySelected.title !== "View all") {
        console.log("filters");
        filteredItems = items.filter(
          (item) => item.category === categorySelected.title
        );
      }
      console.log("filteredItems:", filteredItems);
      viewComponent = (
        <ItemsList
          itemsData={filteredItems}
          category={categorySelected}
          onChangeView={changeViewHandler}
        />
      );
      break;
    case "detail":
      viewComponent = <ItemDetail itemData={itemSelected} />;
      break;
    case "info":
      viewComponent = <Info />;
      break;
    case "home":
      viewComponent = <Home />;
      break;
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", width: "100%" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <HeaderView />
            {viewComponent}
            <NavBar onChangeView={changeViewHandler} />
            <StatusBar />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainWhite,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
