import { useState } from "react";
import { StyleSheet, View } from "react-native";
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
    </AuthFromContainer>
  );
};

const styles = StyleSheet.create({
  form: {
    position: "relative",
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    maxHeight: 489,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  btnConatiner: {
    marginTop: 43,
    marginBottom: 16,
  },
});
