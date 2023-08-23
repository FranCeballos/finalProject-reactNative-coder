import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import AddButton from "./AddButton";
import { setProfileImage } from "../../store/reducers/authSlice";
import { usePostProfileImageMutation } from "../../services/shopService";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const { localId } = useSelector((state) => state.auth.value);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });
      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = async () => {
    triggerSaveProfileImage({ image, localId });
    dispatch(setProfileImage(image));
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image source={{ uri: image }} style={styles.image} />
          <AddButton title="Take another photo" onPress={pickImage} />
          <AddButton title="Confirm photo" onPress={confirmImage} />
        </>
      ) : (
        <>
          <View style={styles.noPhotoContainer}>
            <Text>No photo to show...</Text>
          </View>
          <AddButton title="Take a photo" onPress={pickImage} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
    alignSelf: "stretch",
    paddingHorizontal: 70,
    justifyContent: "center",
    gap: 20,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: "1/1",
    marginHorizontal: "auto",
  },
  noPhotoContainer: {
    width: "100%",
    height: "auto",
    aspectRatio: "1/1",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "black",
    marginHorizontal: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ImageSelector;
