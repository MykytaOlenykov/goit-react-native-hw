import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const FormButton = ({ text, onSubmit, isDisabled = false }) => (
  <TouchableOpacity
    style={
      isDisabled ? [styles.button, styles.disabledButton] : [styles.button]
    }
    onPress={onSubmit}
    disabled={isDisabled}
  >
    <Text
      style={
        isDisabled
          ? [styles.buttonText, styles.disabledButtonText]
          : [styles.buttonText]
      }
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  disabledButton: {
    backgroundColor: "#F6F6F6",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  disabledButtonText: {
    color: "#BDBDBD",
  },
});
