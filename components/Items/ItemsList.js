import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import Item from "./Item";
import { colors } from "../../colors";

const ItemsList = ({
  itemsData,
  category,
  onChangeView,
  searchMode = false,
  searchValue,
}) => {
  const goToItemHandler = (itemId) => {
    onChangeView("detail", { itemId });
  };
  const goToCategories = () => {
    onChangeView("categories");
  };
  if (!searchMode) {
    return (
      <View style={styles.container}>
        <View style={styles.listTitleBox}>
          <Text style={styles.title}>{category.title}</Text>
          {category.title !== "View all" ? (
            <Text style={styles.icon}>{category.icon}</Text>
          ) : (
            <Button
              title="Filter"
              color={colors.mainBlue}
              onPress={goToCategories}
            />
          )}
        </View>
        {itemsData.length === 0 ? (
          <View style={styles.emptyTextBox}>
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        ) : (
          <FlatList
            data={itemsData}
            renderItem={({ item }) => (
              <Item itemData={item} onPress={goToItemHandler} />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    );
  } else {
    const lowerCaseTitleItems = itemsData.map((item) => {
      return {
        ...item,
        searchTitle: item.title.toLowerCase(),
      };
    });
    const searchedItems = lowerCaseTitleItems.filter((item) =>
      item.searchTitle.includes(searchValue)
    );
    return (
      <>
        {searchedItems.length === 0 ? (
          <View style={styles.emptyTextBox}>
            <Text
              style={styles.emptyText}
            >{`No items found for "${searchValue}"`}</Text>
          </View>
        ) : (
          <FlatList
            data={searchedItems}
            renderItem={({ item }) => (
              <Item itemData={item} onPress={goToItemHandler} />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignSelf: "stretch",
    paddingHorizontal: 20,
  },
  listTitleBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  title: {
    fontSize: 28,
    fontFamily: "InterBold",
    marginBottom: 10,
    marginRight: 10,
  },
  icon: {
    fontFamily: "PlayStation",
    fontSize: 30,
    marginRight: 10,
  },
  emptyTextBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontFamily: "InterSemiBold",
    color: "black",
  },
});

export default ItemsList;
