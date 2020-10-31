import { Fragment } from "react";
import Posts from "../List/index";

const One = ({ post }) => {
  console.log(post?.hashtags);
  return (
    <Fragment>
      <h1>{post.title}</h1>
      <Posts
        PostWhereInput={{
          hashtags_some: {
            id_in: post?.hashtags?.map((hashtag) => {
              return hashtag.id;
            }),
          },
          id_not: post.id,
        }}
      />
    </Fragment>
  );
};
export default One;
