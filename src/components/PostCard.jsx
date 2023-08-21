import { View, Image, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const PostCard = ({ id, imgUrl, name, place, comments }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.imageThumb}>
        <Image style={styles.image} source={imgUrl} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={[styles.primaryContainer]}>
        <View style={styles.secondaryContainer}>
          {comments.length ? (
            <FontAwesome
              style={styles.icon}
              name="comment"
              size={24}
              color="#FF6C00"
            />
          ) : (
            <FontAwesome
              style={styles.icon}
              name="comment-o"
              size={24}
              color="#BDBDBD"
            />
          )}
          <Text
            style={
              comments.length
                ? [styles.commnets]
                : [styles.commnets, styles.commentsIsEmpty]
            }
          >
            {comments.length}
          </Text>
        </View>

        <View style={styles.secondaryContainer}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text style={styles.place}>{place}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  secondaryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  name: {
    marginBottom: 8,
    color: "#212121",
    fontFamily: "Roboto_Medium",
    fontSize: 16,
    lineHeight: 19,
  },
  commnets: {
    color: "#212121",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  commentsIsEmpty: {
    color: "#BDBDBD",
  },
  place: {
    color: "#212121",
    fontFamily: "Roboto_Regular",
    fontSize: 16,
    lineHeight: 19,
    textDecorationLine: "underline",
  },
  icon: {
    width: 24,
    transform: [{ scaleX: -1 }],
  },
  imageThumb: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    height: 240,
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});
