import { View } from "react-native";
import { UserInfo } from "./UserInfo";
import { PostCard } from "./PostCard";

export const PostsList = ({ data: { name, email, avatar, posts }, isLast }) => (
  <View style={{ paddingBottom: isLast ? 64 : 32 }}>
    <UserInfo name={name} email={email} avatar={avatar} />

    {!!posts.length && (
      <View style={{ paddingTop: 32, gap: 32 }}>
        {posts.map(({ id, imgUrl, name, place, comments }) => (
          <View key={id}>
            <PostCard
              id={id}
              imgUrl={imgUrl}
              name={name}
              place={place}
              comments={comments}
            />
          </View>
        ))}
      </View>
    )}
  </View>
);
