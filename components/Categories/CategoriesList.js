import { useState } from "react";
import CategoryItem from "./CategoryItem";
import SearchInput from "./SearchInput";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Platform,
} from "react-native";
import ItemsList from "../Items/ItemsList";
import { useGetCategoriesQuery } from "../../services/shopService";

const CategoriesList = ({ navigation }) => {
  const {
    data: categories,
    isLoading: categoriesAreLoading,
    error,
  } = useGetCategoriesQuery();
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (value) => {
    if (value !== "") {
      setIsSearching(true);
      setSearchValue(value);
      return;
    }
    setIsSearching(false);
  };
  const platformOs = Platform ? Platform.OS : "ios";
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, alignItems: "center", width: "100%" }}
      behavior={platformOs || "ios" === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <SearchInput onSearch={searchHandler} />
          <Text style={styles.title}>
            {isSearching ? "Search result..." : "Categories"}
          </Text>
          {isSearching ? (
            <ItemsList
              searchMode={true}
              searchValue={searchValue}
              navigation={navigation}
            />
          ) : categoriesAreLoading ? (
            <ActivityIndicator />
          ) : categories?.length === 0 ? (
            <View style={styles.emptyTextBox}>
              <Text style={styles.emptyText}>No categories found</Text>
            </View>
          ) : (
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <CategoryItem navigation={navigation} categoryData={item} />
              )}
              keyExtractor={(item) => item.title}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "InterBold",
    marginBottom: 10,
  },
  emptyTextBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontWeight: 600,
    color: "#EEEEEE",
  },
});

export default CategoriesList;
