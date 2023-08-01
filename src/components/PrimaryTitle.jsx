import { Text, StyleSheet } from "react-native";

export const PrimaryTitle = ({ text }) => (
  <Text style={styles.title}>{text}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 33,
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto_Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
  },
});
