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
import { AuthFromLink } from "../components/AuthFromLink";
import { logInSchema } from "../schemas";
import imageBg from "../assets/images/authBg.jpg";

export const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await logInSchema.validate({ email, password });

      console.log(data);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={imageBg} style={styles.imageBg}>
          <KeyboardAvoidingView
            style={styles.container}
            keyboardVerticalOffset={-241}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
          >
            <View style={styles.form}>
              <PrimaryTitle text="Увійти" />
              <AuthFormInput
                onChangeInputValue={setEmail}
                value={email}
                placeholder="Адреса електронної пошти"
                isAddMb
              />
              <AuthFormInput
                onChangeInputValue={setPassword}
                value={password}
                placeholder="Пароль"
                isPassword
              />
              <View style={styles.btnConatiner}>
                <FormButton
                  btnStyles={[styles.button]}
                  text="Зареєстуватися"
                  onSubmit={handleSubmit}
                />
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
  },
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
  btnConatiner: {
    marginTop: 43,
    marginBottom: 16,
  },
});
