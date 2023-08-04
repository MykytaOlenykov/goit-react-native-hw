import { useState } from "react";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
} from "react-native";
import { AuthFormInput } from "../components/AuthFormInput";
import { FormButton } from "../components/FormButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { UserAvatarForm } from "../components/UserAvatarForm";
import { AuthFromLink } from "../components/AuthFromLink";
import imageBg from "../assets/images/authBg.jpg";

export const RegistrationScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <TouchableWithoutFeedback
      style={styles.authContainer}
      onPress={Keyboard.dismiss}
    >
      <ImageBackground source={imageBg} style={styles.imageBg}>
        <View style={styles.form}>
          <UserAvatarForm />
          <PrimaryTitle text="Реєстрація" />
          <AuthFormInput
            onChangeInputValue={setUserName}
            value={userName}
            placeholder="Логін"
            isAddMb
          />
          <AuthFormInput
            onChangeInputValue={setPassword}
            value={password}
            placeholder="Адреса електронної пошти"
            isAddMb
          />
          <AuthFormInput
            onChangeInputValue={setEmail}
            value={email}
            placeholder="Пароль"
            isPassword
          />
          <View style={styles.btnConatiner}>
            <FormButton btnStyles={[styles.button]} text="Зареєстуватися" />
          </View>
          <AuthFromLink linkText="Увійти" text="Вже є акаунт?" />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
  },
  imageBg: {
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
  btnConatiner: {
    marginTop: 43,
    marginBottom: 16,
  },
});
