import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import * as yup from "yup";
import { AuthFormInput } from "../components/AuthFormInput";
import { FormButton } from "../components/FormButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { AuthFromLink } from "../components/AuthFromLink";
import { ErrorMessage } from "../components/ErrorMessage";
import { emailSchema, passwordSchema } from "../schemas";
import { BgImage } from "../components/BgImage";

export const LoginScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const handleSubmit = async () => {
    // for dev !!! -------------------------------------
    navigation.navigate("Home");
    // for dev !!! -------------------------------------

    try {
      const data = await yup
        .object({ email: emailSchema, password: passwordSchema })
        .validate({ email, password }, { abortEarly: false });

      console.log(data);
      resetForm();
      navigation.navigate("Home");
    } catch (error) {
      const errorsMessages = error.inner.reduce(
        (acc, validationError) => {
          const fieldName = validationError.path;
          const errorMessage = validationError.message;

          if (fieldName === "email" && !acc.email) {
            acc.email = errorMessage;
          } else if (fieldName === "password" && !acc.password) {
            acc.password = errorMessage;
          }

          return acc;
        },
        { email: null, password: null }
      );

      setEmailError(errorsMessages.email);
      setPasswordError(errorsMessages.password);
    }
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setPasswordError(null);
    setEmailError(null);
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
    if (emailError) {
      emailSchema
        .validate(text)
        .then(() => setEmailError(null))
        .catch((error) => setEmailError(error.message));
    }
  };

  const handleChangePassword = (text) => {
    setPassword(text);
    if (passwordError) {
      passwordSchema
        .validate(text)
        .then(() => setPasswordError(null))
        .catch((error) => setPasswordError(error.message));
    }
  };

  const handleNavigate = () => {
    navigation.navigate("Registration");
    resetForm();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <BgImage>
          <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={-241}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
          >
            <View style={styles.form}>
              <PrimaryTitle text="Увійти" />
              <View style={styles.inputContainer}>
                <AuthFormInput
                  onChangeInputValue={handleChangeEmail}
                  value={email}
                  placeholder="Адреса електронної пошти"
                />
                {emailError && <ErrorMessage text={emailError} />}
              </View>
              <View>
                <AuthFormInput
                  onChangeInputValue={handleChangePassword}
                  value={password}
                  placeholder="Пароль"
                  isPassword
                />
                {passwordError && <ErrorMessage text={passwordError} />}
              </View>
              <View style={styles.btnConatiner}>
                <FormButton
                  btnStyles={[styles.button]}
                  text="Зареєстуватися"
                  onSubmit={handleSubmit}
                />
              </View>
              <AuthFromLink
                linkText="Зареєструватися"
                text="Немає акаунту?"
                onNavigate={handleNavigate}
              />
            </View>
          </KeyboardAvoidingView>
        </BgImage>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 144,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  inputContainer: {
    marginBottom: 16,
  },
  btnConatiner: {
    marginTop: 43,
    marginBottom: 16,
  },
});
