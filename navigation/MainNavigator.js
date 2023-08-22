import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { useGetProfileImageQuery } from "../services/shopService";
import { setProfileImage, setUser } from "../store/reducers/authSlice";
import { fetchSession } from "../db";

const MainNavigator = (props) => {
  const { user, localId } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const {
    data: imageData,
    isLoading: imageIsLoading,
    error,
  } = useGetProfileImageQuery(localId);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log("No session in local storage");
      }
    })();
    imageData && dispatch(setProfileImage(imageData.image));
  }, [imageData]);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
