import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BgImage } from "../components/BgImage";
import { UserAvatarForm } from "../components/UserAvatarForm";
import { PrimaryTitle } from "../components/PrimaryTitle";
import img_1 from "../assets/images/testPostImg1.jpg";
import img_2 from "../assets/images/testPostImg2.jpg";
import avatarImg from "../assets/images/614743.png";
import { PostCard } from "../components/PostCard";

const data = {
  id: "1",
  name: "User_1",
  email: "user_1@gmail.com",
  avatar: avatarImg,
  posts: [
    {
      id: "1",
      imgUrl: img_1,
      name: "Name_1",
      place: "Place_1",
      comments: [],
    },
    {
      id: "2",
      imgUrl: img_2,
      name: "Name_2",
      place: "Place_2",
      comments: ["Lorem ipsum dolor sit amet consectetur adipisicing elit."],
    },
    {
      id: "3",
      imgUrl: img_1,
      name: "Name_3",
      place: "Place_3",
      comments: [],
    },
    {
      id: "4",
      imgUrl: img_2,
      name: "Name_4",
      place: "Place_4",
      comments: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
    },
  ],
};

export const ProfileScreen = ({ navigation }) => {
  const height = Number(Dimensions.get("window").height) - 225;

  return (
    <BgImage>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={[styles.container, { height }]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Feather name="log-out" size={24} color="#BDBDBD" />
          </TouchableOpacity>

          <UserAvatarForm />
          <PrimaryTitle text={data.name} />

          <FlatList
            style={styles.list}
            data={data.posts}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <PostCard
                  id={item.id}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  place={item.place}
                  comments={item.comments}
                />
              </View>
            )}
            keyExtractor={({ id }) => id}
          />
        </View>
      </View>
    </BgImage>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  list: {
    paddingHorizontal: 16,
  },
  item: {
    paddingBottom: 32,
  },
  button: {
    position: "absolute",
    right: 16,
    top: 22,
  },
});
