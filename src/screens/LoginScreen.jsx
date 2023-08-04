import { useRef, useState } from "react";
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
import { AuthFromLink } from "../components/AuthFromLink";
import imageBg from "../assets/images/authBg.jpg";

export const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={styles.imageBg}>
          <KeyboardAvoidingView
            style={styles.authContainer}
            keyboardVerticalOffset={-240}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <PrimaryTitle text="Увійти" />
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
              <AuthFromLink linkText="Зареєструватися" text="Немає акаунту?" />
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: "cover",
  },
  authContainer: {
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
  btnConatiner: {
    marginTop: 43,
    marginBottom: 16,
  },
});
