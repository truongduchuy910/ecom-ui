import { gql } from "@apollo/client";
import { createContext, Fragment } from "react";
import { Query } from "./Query";
export const SellerContext = createContext();
import Head from "next/head";
const level = [0, 5, 8, 13, 21, 34, 55, 89];
const prices = [100000, 200000, 500000, 1000000, 2000000];
const spacing = (i) => level[i];
const uri =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce.loaloa.tech"
    : "http://localhost:6007";
console.log(uri);
export const SellerProvider = ({ children }) => {
  return (
    <Query
      query={gql`
        query($host: String) {
          allUsers(where: { host: $host }) {
            id
            email
            file {
              publicUrl
            }
            logo {
              publicUrl
            }
            store
            slogan
            intro
            contact
            color
            primary
            backgroundColor
            productBackgroundColor
            pageId
          }
        }
      `}
      variables={{
        host: typeof window !== "undefined" ? window.location.host : null,
      }}
    >
      {({ data, error, loading }) => {
        const theme = data?.allUsers[0];
        return theme ? (
          <Fragment>
            <Head>
              <title>
                {theme.store} | {theme.slogan}
              </title>
              <meta name="description" content={theme.intro} />
            </Head>
            <SellerContext.Provider
              value={{
                ...theme,
                server:
                  process.env.NODE_ENV === "production"
                    ? "https://ecommerce.loaloa.tech"
                    : "http://localhost:6007",
                seller: { id: theme.id },
                spacing,
                prices,
                css: css(theme),
              }}
            >
              <div
                style={{
                  backgroundColor: theme.backgroundColor,
                  color: theme.color,
                }}
              >
                {children}
              </div>
            </SellerContext.Provider>
          </Fragment>
        ) : null;
      }}
    </Query>
  );
};
const css = (theme) => ({
  btnIcon: (top = -5, color = theme.backgroundColor) => ({
    position: "absolute",
    top,
    right: -5,
    padding: 3,
    paddingTop: 5,
    width: 30,
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color,
    fontWeight: 800,
    backgroundColor: theme.primary,
  }),
  input: {
    display: "block-inline",
    border: `1px solid ${theme?.productBackgroundColor}`,
    padding: spacing(1),
    paddingLeft: spacing(3),
    borderRadius: spacing(2),
    backgroundColor: theme?.backgroundColor,
    color: theme.color,
  },
  btnInline: {
    display: "inline-block",
    backgroundColor: theme.primary,
    color: theme.backgroundColor,
    border: "none",
    borderRadius: 35,
    minWidth: 35,
  },
  button: {
    color: theme.backgroundColor,
    width: "100%",
    backgroundColor: theme.primary,
    border: `1px solid ${theme.primary}`,
    borderRadius: spacing(2),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
    marginBottom: spacing(2),
  },
  btnOutline: {
    color: theme.primary,

    backgroundColor: theme.backgroundColor,
    border: `1px solid ${theme.primary}`,
    borderRadius: spacing(2),
    paddingTop: spacing(1),
    paddingBottom: spacing(1) + 1,
    marginBottom: spacing(2),
  },
  h5: {
    color: theme.primary,
    fontSize: "0.87rem",
    fontWeight: "bold",
    marginBottom: spacing(3),
  },
  h6: {
    color: theme.primary,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    margin: 0,
    padding: 0,
  },
  h1: {
    color: theme.primary,
  },
  h2: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: theme.primary,
    marginBottom: spacing(2),
  },
  a: {
    display: "block",
  },
  box: {
    backgroundColor: theme.productBackgroundColor,
    marginBottom: spacing(4),
    padding: spacing(3),
    borderRadius: spacing(1),
    border: "1px solid rgba(0,0,0,0.05)",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)",
  },
  filter: {
    color: theme.color,
    backgroundColor: theme.productBackgroundColor,
    borderRadius: spacing(1),
    border: "1px solid rgba(0,0,0,0.05)",

    padding: spacing(2),
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    display: "inline-block",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)",
    marginBottom: spacing(3),
    marginLeft: spacing(3),
    fontSize: "0.9rem",
    position: "relative",
  },
  icon: {
    color: theme.color,
  },
  iconHeader: {
    fontSize: "1rem",
    marginRight: spacing(2),
    marginBottom: spacing(1),
  },
  iconBorder: {
    borderRadius: 35,
    color: theme.primary,
    width: 35,
    height: 35,
    padding: 8,
    fontSize: "1rem",
  },
  removeIcon: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: spacing(2),
    padding: 3,
    color: theme.primary,
    position: "relative",
    top: 0,
    width: 25,
    height: 25,
  },
});
