import { useState, useEffect, Fragment, useContext } from "react";
import { gql, useQuery, rewriteURIForGET } from "@apollo/client";
import { Item as Post } from "./item";
import { Container, Row, Col, Spinner } from "reactstrap";

import { toSlug } from "../../lib/chip";
import { Loading } from "../src/Loading";

import { SellerContext } from "../src/SellerProvider";
const GET_POSTS = gql`
  query(
    $first: Int
    $skip: Int
    $hashtag: HashtagWhereInput
    $seller: UserWhereInput
    $except: String
  ) {
    allPosts(
      first: $first
      skip: $skip
      where: {
        AND: [
          { hashtags_every: $hashtag }
          { seller: $seller }
          { url_not: $except }
        ]
      }
    ) {
      id
      url
      title
      body
      file {
        publicUrl
      }
    }
  }
`;
export const List = ({
  title = "",
  first = 0,
  skip = 0,
  xs,
  sm,
  md,
  lg,
  xl,
  except,
  hashtag,
}) => {
  const theme = useContext(SellerContext);
  let variables = {
    hashtag: hashtag ? { url_contains: hashtag } : null,
    seller: theme.seller,
    except,
  };

  let { data, error, loading } = useQuery(GET_POSTS, {
    variables,
  });
  let width = 0;

  if (error || loading)
    return (
      <div style={{ margin: theme.spacing(3) }}>
        <Loading />
      </div>
    );
  return data?.allPosts?.length ? (
    <section
      id="posts"
      style={{
        paddingLeft: theme.spacing(2),
      }}
    >
      {title ? (
        <h2
          style={{
            ...theme.css.h2,
            textAlign: "center",
            marginBottom: theme.spacing(5),
          }}
        >
          {title}
        </h2>
      ) : null}
      <Row noGutters style={{ display: "flex", justifyContent: "center" }}>
        {data.allPosts.map((post) => (
          <Col
            key={post.id}
            xs={data?.allPosts?.length > 2 ? (xs ? xs : 6) : 12}
            sm={data?.allPosts?.length > 2 ? (sm ? sm : 6) : 12}
            md={data?.allPosts?.length > 2 ? (md ? md : 4) : 12}
            lg={data?.allPosts?.length > 2 ? (lg ? lg : 3) : 12}
            xl={data?.allPosts?.length > 2 ? (xl ? xl : 2) : 12}
            style={{
              padding: width <= 768 && width != 0 ? 3 : theme.spacing(2),
              paddingTop: 0,
            }}
          >
            <Post post={post} />
          </Col>
        ))}
      </Row>
    </section>
  ) : (
    <p style={{ textAlign: "center" }}>Không có kết quả!</p>
  );
};
