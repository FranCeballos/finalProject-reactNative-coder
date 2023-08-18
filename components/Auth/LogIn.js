import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { images } from "../../images";
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";
import { useLoginMutation } from "../../services/authService";
import { loginSchema } from "../../validations/loginSchema";
import { setUser } from "../../store/reducers/authSlice";
import { insertSession } from "../../db";

const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [triggerLogin, result] = useLoginMutation();
  useEffect(() => {
    if (result?.data) {
      dispatch(
        setUser({
          email: result.data?.email || null,
          localId: result.data?.localId || null,
        })
      );
      insertSession({
        email: result.data?.email,
        localId: result.data?.localId,
        token: result.data?.idToken,
      })
        .then((result) => console.log("Session created"))
        .catch((err) => console.log("error inserting session"));
    }
  }, [result]);

  const onSubmitHandler = () => {
    try {
      loginSchema.validateSync({ email, password });
      triggerLogin({ email, password });
    } catch (error) {
      const errorMessage = error.message;
      const triggerErrors = {
        email: () => setEmailError(errorMessage),
        password: () => setPasswordError(errorMessage),
      };
      setEmailError("");
      setPasswordError("");
      triggerErrors[error.path]();
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.psstorelogo} />
      <Text style={styles.title}>Log In</Text>
      <InputForm
        label="Email"
        onChange={(value) => setEmail(value)}
        error={emailError}
        isSecure={false}
      />
      <InputForm
        label="Password"
        onChange={(value) => setPassword(value)}
        error={passwordError}
        isSecure={true}
      />
      <Text style={styles.authError}>
        {result.error ? result.error.data.error.message : ""}
      </Text>
      <SubmitButton onPress={onSubmitHandler} title="Sign In" />
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.navigateText}>Create an account</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    marginHorizontal: "auto",
    alignSelf: "stretch",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  image: {
    width: 300,
    height: 70,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: "InterSemiBold",
    marginBottom: 30,
  },
  navigateText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  authError: {
    color: "red",
    marginBottom: 15,
  },
});

export default LogIn;
