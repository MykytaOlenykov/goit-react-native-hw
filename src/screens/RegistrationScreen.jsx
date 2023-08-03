import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AuthFormInput } from "../components/AuthFormInput";
import { FormButton } from "../components/FormButton";
import { PrimaryTitle } from "../components/PrimaryTitle";
import { AuthFromContainer } from "../components/AuthFromContainer";
import { UserAvatarForm } from "../components/UserAvatarForm";
import { AuthFromLink } from "../components/AuthFromLink";

export const RegistrationScreen = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AuthFromContainer>
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
    </AuthFromContainer>
  );
};

const styles = StyleSheet.create({
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
