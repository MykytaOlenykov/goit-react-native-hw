import { Text, View, StyleSheet, Image } from "react-native";
import avatarImg from "../assets/images/testUserAvatar.jpg";

export const UserInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageThumb}>
        <Image style={styles.image} source={avatarImg} />
      </View>
      <View style={styles.text}>
        <Text style={styles.login}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageThumb: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  login: {
    color: "#212121",
    fontFamily: "Roboto_Bold",
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    color: "rgba(33, 33, 33, 0.80)",
    fontFamily: "Roboto_Regular",
    fontSize: 11,
    lineHeight: 13,
  },
});
