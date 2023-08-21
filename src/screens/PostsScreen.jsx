import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import { PostsList } from "../components/PostsList";
import img_1 from "../assets/images/testPostImg1.jpg";
import img_2 from "../assets/images/testPostImg2.jpg";
import avatarImg1 from "../assets/images/testUserAvatar.jpg";
import avatarImg2 from "../assets/images/614743.png";

const data = [
  {
    id: "1",
    name: "User_1",
    email: "user_1@gmail.com",
    avatar: avatarImg1,
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
  },
  {
    id: "2",
    name: "User_2",
    email: "user_2@gmail.com",
    avatar: avatarImg2,
    posts: [
      {
        id: "1",
        imgUrl: img_1,
        name: "Name_1",
        place: "Place_1",
        comments: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
      {
        id: "2",
        imgUrl: img_2,
        name: "Name_2",
        place: "Place_2",
        comments: [],
      },
      {
        id: "3",
        imgUrl: img_1,
        name: "Name_3",
        place: "Place_3",
        comments: [
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        ],
      },
    ],
  },
];

export const PostsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({ item, index }) => (
          <PostsList data={item} isLast={index === data.length - 1} />
        )}
        keyExtractor={({ id }) => id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  list: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});
