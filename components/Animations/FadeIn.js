import { useSpring, animated } from "react-spring";
export function FadeIn({ children }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.div style={props}>{children}</animated.div>;
}
