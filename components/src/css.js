import theme from "../src/theme";
export const css = {
  input: {
    display: "block-inline",
    border: `1px solid ${theme.secondary}`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    "::placeholder": { color: theme.color },
  },
  button: {
    color: theme.primary,
    width: "100%",
    backgroundColor: "transparent",
    border: `1px solid ${theme.primary}`,
    borderRadius: theme.spacing(1),
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
};
