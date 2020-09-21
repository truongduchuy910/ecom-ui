import { IoIosPlayCircle, IoIosPlay, IoIosClose } from "react-icons/io";
import { useState, Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { theme } from "../../config";
export const PlayButton = (props) => {
  const [horver, setHorver] = useState(false);
  const [show, setShow] = useState(false);
  const animation = useSpring({
    color: horver ? theme.primary : theme.backgroundColor,

    from: { color: theme.backgroundColor },
  });

  return (
    <Fragment>
      <animated.div
        style={{
          ...animation,
          display: "inline-block",
          position: "absolute",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          cursor: "pointer",

          borderRadius: theme.spacing(2),
        }}
        onMouseMove={() => setHorver(true)}
        onMouseLeave={() => setHorver(false)}
        onClick={() => {
          setShow(true);
        }}
      >
        <IoIosPlayCircle
          {...props}
          style={{
            color: "default",
            fontSize: 90,
          }}
        />
      </animated.div>
      {show ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9,
            paddingTop: 100,
            paddingBottom: 50,
          }}
        >
          <IoIosClose
            style={{
              position: "fixed",
              color: theme.backgroundColor,
              top: 60,
              right: 0,
              fontSize: 60,
              zIndex: 100,
            }}
            onClick={() => {
              setShow(false);
            }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              zIndex: -1,
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onClick={() => {
              setShow(false);
            }}
          ></div>
          <iframe
            width="1239"
            height="100%"
            src="https://www.youtube.com/embed/0rpHzrymKds"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : null}
    </Fragment>
  );
};
