
import { animated, useSpring } from "react-spring";

export function Box({ children }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={props}>
      <div
        style={{
          padding: 34,
          marginTop: 21,
          marginBottom: 21,
          backgroundColor: "white",
          borderRadius: 8,
        }}
      >
        {children}
      </div>
    </animated.div>
  );
}
