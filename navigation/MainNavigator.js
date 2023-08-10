import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";

import React from "react";

const MainNavigator = (props) => {
  const user = useSelector((state) => state.auth.value.user);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
