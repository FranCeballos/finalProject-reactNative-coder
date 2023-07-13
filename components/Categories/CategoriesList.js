import { useState } from "react";
import CategoryItem from "./CategoryItem";
import SearchInput from "./SearchInput";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import ItemsList from "../Items/ItemsList";

const CategoriesList = ({ categories, onChangeView, allItems }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const goToCategoryHandler = (category) => {
    onChangeView("category", { category });
  };
  const searchHandler = (value) => {
    console.log("search value in list", value);
    if (value !== "") {
      setIsSearching(true);
      setSearchValue(value);
      return;
    }
    setIsSearching(false);
  };
  return (
    <View style={styles.container}>
      <SearchInput onSearch={searchHandler} />
      <Text style={styles.title}>
        {isSearching ? "Search result..." : "Categories"}
      </Text>
      {isSearching ? (
        <ItemsList
          itemsData={allItems}
          searchMode={true}
          searchValue={searchValue}
        />
      ) : categories.length === 0 ? (
        <View style={styles.emptyTextBox}>
          <Text style={styles.emptyText}>No categories found</Text>
        </View>
      ) : (
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryItem categoryData={item} onPress={goToCategoryHandler} />
          )}
          keyExtractor={(item) => item.title}
        />
      )}
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
