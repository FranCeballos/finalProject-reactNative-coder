import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";

import React, { useEffect } from "react";
import { useGetProfileImageQuery } from "../services/shopService";
import { setProfileImage } from "../store/reducers/authSlice";

const MainNavigator = (props) => {
  const { user, localId } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const {
    data: imageData,
    isLoading: imageIsLoading,
    error,
  } = useGetProfileImageQuery(localId);

  useEffect(() => {
    imageData && dispatch(setProfileImage(imageData.image));
  }, [imageData]);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
