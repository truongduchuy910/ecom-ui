import { Link } from "../src/Link";

import { useState, Fragment, useContext } from "react";

import { FadeIn } from "../Animations/FadeIn";

import { useRouter } from "next/router";
import { SellerContext } from "../src/SellerProvider";

export const Item = ({ post }) => {
  const theme = useContext(SellerContext);
  const [show, setShow] = useState(false);
  const router = useRouter();
  console.log(1);
  return (
    <FadeIn>
      <div style={{ padding: theme.spacing(2) }}>
        {/* <Link
          href={{
            pathname: "/post",
            query: { detail: post.url },
          }}
        >
          <a> */}
        <div
          style={{
            ...theme.css.box,
            padding: 0,
            position: "relative",
          }}
        >
          <img
            src={theme.server + post.file.publicUrl}
            style={{
              marginBottom: 0,
              width: "100%",
              borderRadius: `${theme.spacing(1)}px ${theme.spacing(
                1
              )}px 0px 0px`,
            }}
          />
          <div style={{ padding: theme.spacing(3) }}>
            <h5
              style={{
                color: theme.color,
                textTransform: "capitalize",
                marginTop: theme.spacing(3),
              }}
            >
              {post.title}
            </h5>
            <div dangerouslySetInnerHTML={{__html: post.body}} />
            
          </div>
        </div>
        {/* </a>
        </Link> */}
      </div>
    </FadeIn>
  );
};
