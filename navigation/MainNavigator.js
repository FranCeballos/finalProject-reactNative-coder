import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useGetProfileImageQuery } from "../services/shopService";
import { setProfileImage } from "../store/reducers/authSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthStack from "./AuthStack";
import TabNavigator from "./TabNavigator";
import { setUser } from "../store/reducers/authSlice";
import { fetchSession } from "../db";

const MainNavigator = (props) => {
  const { user, localId } = useSelector((state) => state.auth.value);
  const {
    data: imageData,
    isLoading: imageIsLoading,
    error,
  } = useGetProfileImageQuery(localId);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session?.rows.length) {
          const userSession = session.rows._array[0];
          dispatch(setUser(userSession));
        }
      } catch (err) {
        console.log("No session in local storage");
      }
    })();
  }, []);

  useEffect(() => {
    imageData && dispatch(setProfileImage(imageData.image));
  }, [user, imageData]);

  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigator;
