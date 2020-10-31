import { useSpring, animated } from "react-spring";
export function Loading() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.05)",
          width: "100%",
          height: "100%",
          minHeight: 200,
          minWidth: 25,
        }}
      ></div>
    </animated.div>
  );
}
