import { theme } from "../../config/index";

import { FiThermometer } from "react-icons/fi";
export const css = {
  input: {
    display: "block-inline",
    border: `1px solid ${theme.bgHighlight}`,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.bgDark,
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
    borderRadius: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  h5: {
    color: theme.primary,
    fontSize: "0.9rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  h6: {
    color: theme.primary,
    fontSize: "0.8rem",
    fontWeight: "bold",
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
    marginBottom: theme.spacing(4),
  },
  a: {
    display: "block",
  },
  box: {
    backgroundColor: theme.backgroundColor,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(3),
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)",
  },
  filter: {
    color: theme.color,
    backgroundColor: theme.backgroundColor,
    borderRadius: theme.spacing(3),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    display: "inline-block",
    fontWeight: "bold",
    boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.03)",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },
  icon: {
    color: theme.color,
  },
  iconHeader: {
    fontSize: "1rem",
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
};
