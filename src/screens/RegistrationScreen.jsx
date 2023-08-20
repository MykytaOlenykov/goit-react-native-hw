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
import { UserAvatarForm } from "../components/UserAvatarForm";
import { AuthFromLink } from "../components/AuthFromLink";
import { ErrorMessage } from "../components/ErrorMessage";
import { nameSchema, emailSchema, passwordSchema } from "../schemas";
import { BgImage } from "../components/BgImage";

export const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  const handleSubmit = async () => {
    try {
      const data = await yup
        .object({
          name: nameSchema,
          email: emailSchema,
          password: passwordSchema,
        })
        .validate({ name, email, password }, { abortEarly: false });

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
          } else if (fieldName === "name" && !acc.name) {
            acc.name = errorMessage;
          }

          return acc;
        },
        { email: null, password: null, name: null }
      );

      setNameError(errorsMessages.name);
      setEmailError(errorsMessages.email);
      setPasswordError(errorsMessages.password);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setNameError(null);
    setPasswordError(null);
    setEmailError(null);
  };

  const handleChangeName = (text) => {
    setName(text);
    if (nameError) {
      nameSchema
        .validate(text)
        .then(() => setNameError(null))
        .catch((error) => setNameError(error.message));
    }
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
    navigation.navigate("Login");
    resetForm();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <BgImage>
          <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={-175}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
          >
            <View style={styles.form}>
              <UserAvatarForm />
              <PrimaryTitle text="Реєстрація" />
              <View style={styles.inputContainer}>
                <AuthFormInput
                  onChangeInputValue={handleChangeName}
                  value={name}
                  placeholder="Логін"
                />
                {nameError && <ErrorMessage text={nameError} />}
              </View>
              <View style={styles.inputContainer}>
                <AuthFormInput
                  onChangeInputValue={handleChangeEmail}
                  value={email}
                  placeholder="Адреса електронної пошти"
                  isAddMt
                />
                {emailError && <ErrorMessage text={emailError} />}
              </View>
              <View>
                <AuthFormInput
                  onChangeInputValue={handleChangePassword}
                  value={password}
                  placeholder="Пароль"
                  isPassword
                  isAddMt
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
                linkText="Увійти"
                text="Вже є акаунт?"
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
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
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
