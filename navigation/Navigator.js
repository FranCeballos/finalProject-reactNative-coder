import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "../components/Home/Home";
import CategoriesList from "../components/Categories/CategoriesList";
import ItemDetail from "../components/Items/ItemDetail";
import Info from "../components/Info/Info";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemsList from "../components/Items/ItemsList";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={CategoriesList} />
        <Stack.Screen
          name="ItemsList"
          component={ItemsList}
          options={{ title: "Items" }}
        />
        <Stack.Screen name="Detail" component={ItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
