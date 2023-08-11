import { createNativeStackNavigator } from "@react-navigation/native-stack";
import User from "../components/User/User";
import ImageSelector from "../components/User/ImageSelector";

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="ImageSelector" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default UserStack;
