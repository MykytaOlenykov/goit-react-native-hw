import { useNavigation } from "@react-navigation/native";
import { Text, StyleSheet } from "react-native";

export const AuthFromLink = ({ linkText, text, onNavigate }) => (
  <Text style={styles.text}>
    {text}{" "}
    <Text style={styles.linkText} onPress={onNavigate}>
      {linkText}
    </Text>
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: "#1B4371",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  linkText: {
    textDecorationLine: "underline",
  },
});
