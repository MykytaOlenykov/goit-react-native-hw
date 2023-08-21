import { useState, useRef } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const CreatePostsInput = ({
  value,
  onChangeValue,
  placeholder,
  isShowIcon = false,
  isPrimaryInputText = false,
}) => {
  const [iconColor, setIconColor] = useState("#BDBDBD");
  const [styleInput, setStyleInput] = useState(() => {
    const style = [styles.input];
    isPrimaryInputText && style.push(styles.inputPrimaryText);
    isShowIcon && style.push(styles.inputWithIcon);
    return style;
  });
  const textInputRef = useRef(null);

  const handleAddFocusInput = () => {
    setIconColor("#FF6C00");
    setStyleInput((prev) => [...prev, styles.inputWithFocus]);
  };

  const handleRemoveFocusInput = () => {
    setIconColor("#BDBDBD");
    const style = [styles.input];
    isPrimaryInputText && style.push(styles.inputPrimaryText);
    isShowIcon && style.push(styles.inputWithIcon);
    setStyleInput(style);
  };

  return (
    <View style={styles.container}>
      {isShowIcon && (
        <Feather
          style={styles.icon}
          name="map-pin"
          size={24}
          color={iconColor}
        />
      )}
      <TextInput
        ref={textInputRef}
        style={styleInput}
        value={value}
        onChangeText={onChangeValue}
        onFocus={handleAddFocusInput}
        onBlur={handleRemoveFocusInput}
        placeholder={placeholder}
        placeholderTextColor={"#BDBDBD"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
  },
  input: {
    paddingTop: 16,
    paddingBottom: 14,
    color: "#212121",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputPrimaryText: {
    fontFamily: "Roboto_Medium",
  },
  inputWithIcon: {
    paddingLeft: 28,
  },
  inputWithFocus: {
    borderColor: "#FF6C00",
  },
  icon: {
    position: "absolute",
  },
});
