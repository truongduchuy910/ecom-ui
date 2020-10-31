export function GymerBg({ children, style }) {
  return (
    <div
      style={{
        ...style,
        background: "url(/assets/img/gymer.jpg)",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}
