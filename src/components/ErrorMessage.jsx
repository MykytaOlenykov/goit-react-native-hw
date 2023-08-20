import { Text, StyleSheet } from "react-native";

export const ErrorMessage = ({ text }) => (
  <Text style={styles.text}>{text}</Text>
);

const styles = StyleSheet.create({
  text: {
    marginTop: 4,
    fontSize: 14,
    color: "#F25137",
  },
});
