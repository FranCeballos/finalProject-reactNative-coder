import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../components/Home/Home";
import CategoriesList from "../components/Categories/CategoriesList";
import ItemsList from "../components/Items/ItemsList";
import ItemDetail from "../components/Items/ItemDetail";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={CategoriesList} />
      <Stack.Screen name="ItemsList" component={ItemsList} />
      <Stack.Screen name="Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;
