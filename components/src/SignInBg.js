

export function SignInBg({ children, style }) {
  return (
    <div
      style={{
        ...style,
        background: `url(${theme.signInBg})`,
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
