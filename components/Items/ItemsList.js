import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import Item from "./Item";
import { colors } from "../../lib/colors";
import {
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  useGetProductsByNameQuery,
  useGetProductsQuery,
} from "../../services/shopService";

const ItemsList = ({
  navigation,
  route,
  searchMode = false,
  searchValue = "",
}) => {
  if (!searchMode) {
    const categoryParam = route?.params.category;
    const {
      data: categoriesData,
      isLoading: categoriesAreLoading,
      error: categoriesError,
    } = useGetCategoriesQuery();
    const category = categoriesData?.filter(
      (cat) => cat.title === categoryParam
    );
    const {
      data: productsData,
      isLoading: productsAreLoading,
      error: productsError,
    } = useGetProductsByCategoryQuery(categoryParam);
    const itemsData = productsData ? Object.values(productsData) : [];

    return (
      <View style={styles.container}>
        <View style={styles.listTitleBox}>
          <Text style={styles.title}>{category.name}</Text>
          {category.name !== "View all" ? (
            <Text style={styles.icon}>{category.icon}</Text>
          ) : (
            <Button
              title="Filter"
              color={colors.mainBlue}
              onPress={() => navigation.navigate("Search")}
            />
          )}
        </View>
        {productsAreLoading ? (
          <View style={styles.emptyTextBox}>
            <ActivityIndicator />
          </View>
        ) : itemsData?.length === 0 ? (
          <View style={styles.emptyTextBox}>
            <Text style={styles.emptyText}>No items found</Text>
          </View>
        ) : (
          <FlatList
            data={itemsData}
            renderItem={({ item }) => (
              <Item itemData={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item._id}
          />
        )}
      </View>
    );
  } else {
    const {
      data: productsData,
      isLoading: productsAreLoading,
      error: productsError,
    } = useGetProductsQuery();
    const lowerCaseTitleItems =
      productsData?.map((item) => {
        return {
          ...item,
          searchTitle: item.title.toLowerCase(),
        };
      }) || [];
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
              <Item itemData={item} navigation={navigation} />
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
    paddingVertical: 20,
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
