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
import { registerSchema } from "../schemas/registerSchema";
import imageBg from "../assets/images/authBg.jpg";

export const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await registerSchema.validate({ name, email, password });

      console.log(data);
      setName("");
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
            keyboardVerticalOffset={-175}
            behavior={Platform.OS == "ios" ? "padding" : undefined}
          >
            <View style={styles.form}>
              <UserAvatarForm />
              <PrimaryTitle text="Реєстрація" />
              <AuthFormInput
                onChangeInputValue={setName}
                value={name}
                placeholder="Логін"
                isAddMb
              />
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
              <AuthFromLink linkText="Увійти" text="Вже є акаунт?" />
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
