import theme from "../src/theme";
export const css = {
  input: {
    display: "block-inline",
    border: `1px solid ${theme.secondary}`,
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    borderRadius: theme.spacing(1),
    "::placeholder": { color: theme.color },
  },
  btnInline: {
    display: "inline-block",
    backgroundColor: "transparent",
    color: theme.color,
    border: `1px solid ${theme.color}`,
    borderRadius: theme.spacing(1),
    minWidth: 35,
  },
  button: {
    color: theme.primary,
    width: "100%",
    backgroundColor: "transparent",
    border: `1px solid ${theme.primary}`,
    borderRadius: 35,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  h5: {
    color: theme.primary,
    fontSize: "1rem",
    textTransform: "uppercase",
  },
  h1: {
    color: theme.primary,
  },
  h2: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: theme.primary,
  },
  a: {
    display: "block",
  },
};
