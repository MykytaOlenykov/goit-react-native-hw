import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const FormButton = ({ text }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
