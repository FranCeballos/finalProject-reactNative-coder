import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../components/Auth/LogIn";
import SignUp from "../components/Auth/SignUp";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
