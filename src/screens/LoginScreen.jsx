import { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView, Platform } from "react-native";
import { AuthFormInput } from "../components/AuthFormInput";
import { FormButton } from "../components/FormButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { AuthFromContainer } from "../components/AuthFromContainer";
import { AuthFromLink } from "../components/AuthFromLink";

export const LoginScreen = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AuthFromContainer>
      <View style={styles.form}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
        </KeyboardAvoidingView>
      </View>
    </AuthFromContainer>
  );
};

const styles = StyleSheet.create({
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
