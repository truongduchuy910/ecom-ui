export function GymerBg({ children, style }) {
  return (
    <div
      style={{
        ...style,
        background: "url(/assets/img/gymer.JPG)",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
