import { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

export const AuthFormInput = ({
  value,
  placeholder,
  onChangeInputValue,
  isPassword = false,
}) => {
  const [style, setStyle] = useState(() => [styles.input]);
  const [hidePassword, setHidePassword] = useState(true);

  const handleAddFocusStyle = () => {
    setStyle((prev) => [...prev, styles.input_focus]);
  };

  const handleRemoveFocusStyle = () => {
    setStyle([styles.input]);
  };

  const handleTogglePassword = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <View style={styles.inputConatiner}>
      <TextInput
        style={style}
        onChangeText={onChangeInputValue}
        onFocus={handleAddFocusStyle}
        onBlur={handleRemoveFocusStyle}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && (
        <TouchableOpacity style={styles.button} onPress={handleTogglePassword}>
          <Text style={styles.text}>
            {hidePassword ? "Показати" : "Приховати"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputConatiner: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    paddingTop: 15,
    paddingBottom: 16,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    color: "#212121",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  input_focus: {
    color: "#212121",
    borderColor: "#FF6C00",
    backgroundColor: "#FFF",
  },
  button: {
    position: "absolute",
    right: 16,
  },
  text: {
    color: "#1B4371",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
  },
});
