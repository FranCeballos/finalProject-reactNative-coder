import React, { useState, useEffect } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { images } from "../../images";
import InputForm from "./InputForm";
import SubmitButton from "./SubmitButton";
import { useSignUpMutation } from "../../services/authService";
import { setUser } from "../../store/reducers/authSlice";
import { useDispatch } from "react-redux";
import { signupSchema } from "../../validations/signupSchema";

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  useEffect(() => {
    result.data &&
      dispatch(
        setUser({
          email: result.data?.email || null,
          localId: result.data?.localId || null,
        })
      );
  }, [result]);

  const onSubmitHandler = async () => {
    try {
      signupSchema.validateSync({
        email,
        password,
        confirmPassword,
      });
      triggerSignup({ email, password });
    } catch (error) {
      const errorMessage = error.message;
      const triggerErrors = {
        email: () => setEmailError(errorMessage),
        password: () => setPasswordError(errorMessage),
        confirmPassword: () => setConfirmPasswordError(errorMessage),
      };
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      triggerErrors[error.path]();
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={images.psstorelogo} />
      <Text style={styles.title}>Create an account</Text>
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
      <InputForm
        label="Confirm Password"
        onChange={(value) => setConfirmPassword(value)}
        error={confirmPasswordError}
        isSecure={true}
      />
      <Text style={styles.authError}>
        {result.error ? result.error.data.error.message : ""}
      </Text>
      <SubmitButton onPress={onSubmitHandler} title="Sign Up" />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.navigateText}>Already have an account?</Text>
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

export default SignUp;
