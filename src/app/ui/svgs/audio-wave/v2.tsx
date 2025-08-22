import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { forwardRef, useRef } from "react";

type AudioWaveProps = {
  className?: string;
};

export const AudioWave2 = forwardRef<
  HTMLDivElement,
  AudioWaveProps & { containerRef?: React.RefObject<HTMLDivElement> }
>(({ className, containerRef, ...props }, ref) => {
  // Use the passed ref, fallback to internal ref if not provided

  const { scrollYProgress } = useScroll({
    offset: ["center", "end end"],
  });

  // Base transforms (raw values)
  const rawY = useTransform(scrollYProgress, [0, 1], [0, 84]);
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -44]);

  const shadowOpacity = useTransform(
    scrollYProgress,
    [0, 0.99, 1],
    [0.2, 0.2, 0],
  );

  const rawSkewX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const rawSkewY = useTransform(scrollYProgress, [0, 1], [-15, 0]);

  const rawCaretX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rawMaskedRectWidth = useTransform(scrollYProgress, [0, 1], [149, 250]);

  // Add spring to smooth transitions
  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };

  const y = useSpring(rawY, springConfig);
  const x = useSpring(rawX, springConfig);

  const skewX = useSpring(rawSkewX, springConfig);
  const skewY = useSpring(rawSkewY, springConfig);

  const caretX = useSpring(rawCaretX, springConfig);
  const maskedRectWidth = useSpring(rawMaskedRectWidth, springConfig);

  return (
    <>
      <foreignObject width="811.459" height="406.699" x="-51.653" y="60.511">
        <div
          style={{
            clipPath: "url(#bgblur_5_449_422_clip_path)",
            backdropFilter: "blur(47.33px)",
            WebkitBackdropFilter: "blur(47.33px)",
            height: "100%",
            width: "100%",
            willChange: "transform, filter",
          }}
        ></div>
      </foreignObject>

      <motion.svg
        viewBox="0 0 915 442"
        className={className}
        fill={"none"}
        style={{
          skewX,
          skewY,
        }}
      >
        <g id="Audio Wave" clipPath="url(#clip0_454_715)">
          <g id="Bubble Group">
            <g id="Bubble 4" filter="url(#filter0_f_454_715)">
              <path
                fill="#AA3F0F"
                fillOpacity="0.7"
                d="M773.477 362.987c-21.061 18.175-44.847 36.56-69.891 38.593s-50.977-12.948-76.393-28.074c-25.085-14.94-49.614-30.872-68.08-52.965-18.796-22.278-31.859-50.902-28.361-78.059 2.983-27.012 22.156-51.896 37.548-79.336 15.062-27.625 26.486-57.29 47.692-74.95 21.206-17.659 52.854-22.941 80.737-16.863 28.068 5.749 52.702 23.043 79.706 36.887 26.489 13.989 56.009 24.898 72.676 45.547 16.151 20.795 19.595 51.846 14.549 79.439-5.563 27.738-19.286 52.202-35.387 73.159-15.957 21.473-33.921 38.777-54.796 56.622"
              ></path>
            </g>
            <g id="Bubble 3" filter="url(#filter1_f_454_715)">
              <path
                fill="#AA3F0F"
                fillOpacity="0.8"
                d="M766.943 355.564c-18.78 15.805-39.967 31.766-62.086 33.285s-44.834-11.981-67.093-25.605c-21.968-13.456-43.436-27.781-59.486-47.475-16.34-19.862-27.552-45.259-24.168-69.181 2.927-23.8 20.116-45.545 33.996-69.586 13.59-24.209 23.995-50.257 42.898-65.605 18.902-15.349 46.883-19.663 71.417-13.995 24.701 5.379 46.246 20.908 69.92 33.417 23.217 12.632 49.143 22.58 63.623 40.981 14.022 18.523 16.721 45.957 11.966 70.247-5.211 24.411-17.586 45.846-32.022 64.16-14.313 18.77-30.352 33.841-48.965 49.357"
              ></path>
            </g>
            <g id="Bubble 2" filter="url(#filter2_f_454_715)">
              <path
                fill="#AA3F0F"
                fillOpacity="0.9"
                d="M795.79 230.398c8.325 17.785 16.271 37.462 12.866 54.868-3.406 17.407-18.542 32.164-33.678 46.544-14.947 14.19-30.462 27.812-49.003 36.137-18.731 8.514-40.679 11.92-58.463 4.352-17.785-7.19-31.029-24.975-46.733-40.679-15.893-15.514-33.867-28.947-41.814-46.732-7.946-17.785-5.486-40.3 3.974-58.085 9.27-17.974 25.731-31.408 40.299-47.111 14.569-15.326 27.624-33.3 44.841-40.679 17.217-7 38.976-3.405 56.761 5.298 17.784 9.082 31.785 23.083 42.948 38.03 11.541 14.946 19.866 30.461 28.002 48.057"
              ></path>
            </g>
            <g id="Bubble 1" filter="url(#filter3_f_454_715)">
              <path
                fill="#AA3F0F"
                fillOpacity="0.98"
                d="M621.302 325.893c-10.537-12.52-21.177-26.645-22.19-41.391s7.988-29.889 17.07-44.728c8.971-14.646 18.521-28.958 31.65-39.658 13.241-10.893 30.173-18.368 46.121-16.112 15.866 1.951 30.363 13.411 46.39 22.664 16.139 9.06 33.505 15.997 43.737 28.599s13.109 31.255 9.33 47.611c-3.586 16.468-13.938 30.831-22.278 46.614-8.421 15.478-15.053 32.762-27.32 42.415-12.349 9.348-30.639 11.147-46.832 7.977-16.274-3.474-30.564-11.724-42.773-21.348-12.514-9.542-22.561-20.234-32.905-32.643"
              ></path>
            </g>
          </g>
          <g id="Group 3">
            <g id="Group 1">
              <g
                id="Vector"
                fill="#B17762"
                fillOpacity="0.4"
                data-figma-bg-blur-radius="94.653"
              >
                <path d="M43 194.799c0-21.89 17.745-39.635 39.635-39.635h497.241c21.89 0 39.635 17.745 39.635 39.635v177.758H82.635c-21.89 0-39.635-17.745-39.635-39.635z"></path>
                <path d="M619.511 342.53v.994c.345 1.954 2.677 6.899 15.614 15.821 14.682 10.126 30.027 13.212 30.027 13.212h-45.641v-29.033c-.119-.676 0-.994 0-.994"></path>
              </g>
              <motion.circle
                style={{
                  opacity: shadowOpacity,
                }}
                id="Shadow Button"
                cx="119.271"
                cy="241.042"
                r="42.638"
                fill="#000"
              ></motion.circle>
              <motion.g
                id="Shadow Wave"
                fill="#000"
                style={{
                  opacity: shadowOpacity,
                }}
              >
                <g id="Waves">
                  <g id="played waves">
                    <rect
                      id="Rectangle 6"
                      width="4.804"
                      height="44.439"
                      x="201.535"
                      y="218.821"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 7"
                      width="4.804"
                      height="44.439"
                      x="208.738"
                      y="218.821"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 8"
                      width="4.804"
                      height="54.048"
                      x="215.949"
                      y="214.016"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 9"
                      width="4.804"
                      height="8.407"
                      x="223.16"
                      y="236.836"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 10"
                      width="4.804"
                      height="8.407"
                      x="230.363"
                      y="236.836"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 11"
                      width="4.804"
                      height="34.831"
                      x="237.57"
                      y="223.625"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 12"
                      width="4.804"
                      height="49.244"
                      x="244.773"
                      y="216.418"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 13"
                      width="4.804"
                      height="34.831"
                      x="251.984"
                      y="223.625"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 14"
                      width="4.804"
                      height="18.016"
                      x="259.188"
                      y="232.032"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 15"
                      width="4.804"
                      height="54.048"
                      x="266.395"
                      y="214.016"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 16"
                      width="4.804"
                      height="54.048"
                      x="273.598"
                      y="214.016"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 17"
                      width="4.804"
                      height="27.625"
                      x="280.809"
                      y="227.228"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 18"
                      width="4.804"
                      height="44.439"
                      x="288.012"
                      y="218.821"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 19"
                      width="4.804"
                      height="80.471"
                      x="295.223"
                      y="200.805"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 20"
                      width="4.804"
                      height="73.265"
                      x="302.422"
                      y="204.408"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 21"
                      width="4.804"
                      height="54.048"
                      x="309.633"
                      y="214.016"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 22"
                      width="4.804"
                      height="61.254"
                      x="316.836"
                      y="210.413"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 23"
                      width="4.804"
                      height="27.625"
                      x="324.047"
                      y="227.228"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 24"
                      width="4.804"
                      height="44.439"
                      x="331.25"
                      y="218.821"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 25"
                      width="4.804"
                      height="27.625"
                      x="338.457"
                      y="227.228"
                      rx="2.402"
                    ></rect>
                    <rect
                      id="Rectangle 26"
                      width="4.804"
                      height="44.439"
                      x="345.66"
                      y="218.821"
                      rx="2.402"
                    ></rect>
                  </g>
                  <rect
                    id="Rectangle 27"
                    width="4.804"
                    height="27.625"
                    x="352.871"
                    y="227.228"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 28"
                    width="4.804"
                    height="54.048"
                    x="360.082"
                    y="214.016"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 29"
                    width="4.804"
                    height="8.407"
                    x="367.281"
                    y="236.836"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 30"
                    width="4.804"
                    height="18.016"
                    x="374.492"
                    y="232.032"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 31"
                    width="4.804"
                    height="27.625"
                    x="381.695"
                    y="227.228"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 32"
                    width="4.804"
                    height="8.407"
                    x="388.906"
                    y="236.836"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 33"
                    width="4.804"
                    height="8.407"
                    x="396.109"
                    y="236.836"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 34"
                    width="4.804"
                    height="8.407"
                    x="403.316"
                    y="236.836"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 35"
                    width="4.804"
                    height="3.603"
                    x="410.52"
                    y="239.238"
                    rx="1.802"
                  ></rect>
                  <rect
                    id="Rectangle 36"
                    width="4.804"
                    height="3.603"
                    x="417.73"
                    y="239.238"
                    rx="1.802"
                  ></rect>
                  <rect
                    id="Rectangle 37"
                    width="4.804"
                    height="8.407"
                    x="424.934"
                    y="236.836"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 38"
                    width="4.804"
                    height="27.625"
                    x="432.141"
                    y="227.228"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 39"
                    width="4.804"
                    height="34.831"
                    x="439.344"
                    y="223.625"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 40"
                    width="4.804"
                    height="44.439"
                    x="446.555"
                    y="218.821"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 41"
                    width="4.804"
                    height="61.254"
                    x="453.758"
                    y="210.413"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 42"
                    width="4.804"
                    height="80.471"
                    x="460.969"
                    y="200.805"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 43"
                    width="4.804"
                    height="61.254"
                    x="468.168"
                    y="210.413"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 44"
                    width="4.804"
                    height="80.471"
                    x="475.379"
                    y="200.805"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 45"
                    width="4.804"
                    height="49.244"
                    x="482.582"
                    y="216.418"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 46"
                    width="4.804"
                    height="27.625"
                    x="489.793"
                    y="227.228"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 47"
                    width="4.804"
                    height="49.244"
                    x="497.004"
                    y="216.418"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 48"
                    width="4.804"
                    height="34.831"
                    x="504.203"
                    y="223.625"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 49"
                    width="4.804"
                    height="61.254"
                    x="511.414"
                    y="210.413"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 50"
                    width="4.804"
                    height="44.439"
                    x="518.617"
                    y="218.821"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 51"
                    width="4.804"
                    height="27.625"
                    x="525.828"
                    y="227.228"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 52"
                    width="4.804"
                    height="44.439"
                    x="533.031"
                    y="218.821"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 53"
                    width="4.804"
                    height="61.254"
                    x="540.238"
                    y="210.413"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 54"
                    width="4.804"
                    height="54.048"
                    x="547.441"
                    y="214.016"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 55"
                    width="4.804"
                    height="80.471"
                    x="554.652"
                    y="200.805"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 56"
                    width="4.804"
                    height="34.831"
                    x="561.855"
                    y="223.625"
                    rx="2.402"
                  ></rect>
                  <rect
                    id="Rectangle 57"
                    width="4.804"
                    height="22.82"
                    x="569.062"
                    y="229.63"
                    rx="2.402"
                  ></rect>
                </g>
                <motion.path
                  style={{ x: caretX }}
                  id="Caret Shadow"
                  d="M350.477 185.191h1.201v96.085h-1.201z"
                ></motion.path>
              </motion.g>
              <motion.g
                id="Floated Group"
                style={{ y, x }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <g id="Floated Button">
                  <circle
                    id="Ellipse 1"
                    cx="162.232"
                    cy="158.332"
                    r="42.638"
                    fill="#AA3F0F"
                  ></circle>
                  <path
                    id="Polygon 1"
                    fill="#D9D9D9"
                    d="m186.852 158.331-36.933 21.323v-42.646z"
                  ></path>
                </g>
                <g id="Floated Wave">
                  <g id="Waves Masked With Caret">
                    <g id="Waves Masked">
                      <g id="Waves_2" fill="#3A2720">
                        <rect
                          id="Rectangle 6_2"
                          width="4.804"
                          height="44.439"
                          x="245.633"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 7_2"
                          width="4.804"
                          height="44.439"
                          x="252.836"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 8_2"
                          width="4.804"
                          height="54.048"
                          x="260.043"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 9_2"
                          width="4.804"
                          height="8.407"
                          x="267.254"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 10_2"
                          width="4.804"
                          height="8.407"
                          x="274.457"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 11_2"
                          width="4.804"
                          height="34.831"
                          x="281.668"
                          y="138.434"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 12_2"
                          width="4.804"
                          height="49.244"
                          x="288.867"
                          y="131.228"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 13_2"
                          width="4.804"
                          height="34.831"
                          x="296.078"
                          y="138.434"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 14_2"
                          width="4.804"
                          height="18.016"
                          x="303.281"
                          y="146.841"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 15_2"
                          width="4.804"
                          height="54.048"
                          x="310.492"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 16_2"
                          width="4.804"
                          height="54.048"
                          x="317.695"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 17_2"
                          width="4.804"
                          height="27.625"
                          x="324.902"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 18_2"
                          width="4.804"
                          height="44.439"
                          x="332.105"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 19_2"
                          width="4.804"
                          height="80.471"
                          x="339.316"
                          y="115.614"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 20_2"
                          width="4.804"
                          height="73.265"
                          x="346.52"
                          y="119.217"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 21_2"
                          width="4.804"
                          height="54.048"
                          x="353.727"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 22_2"
                          width="4.804"
                          height="61.254"
                          x="360.93"
                          y="125.223"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 23_2"
                          width="4.804"
                          height="27.625"
                          x="368.141"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 24_2"
                          width="4.804"
                          height="44.439"
                          x="375.344"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 25_2"
                          width="4.804"
                          height="27.625"
                          x="382.555"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 26_2"
                          width="4.804"
                          height="44.439"
                          x="389.754"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 27_2"
                          width="4.804"
                          height="27.625"
                          x="396.965"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 28_2"
                          width="4.804"
                          height="54.048"
                          x="404.176"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 29_2"
                          width="4.804"
                          height="8.407"
                          x="411.379"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 30_2"
                          width="4.804"
                          height="18.016"
                          x="418.586"
                          y="146.841"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 31_2"
                          width="4.804"
                          height="27.625"
                          x="425.789"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 32_2"
                          width="4.804"
                          height="8.407"
                          x="433"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 33_2"
                          width="4.804"
                          height="8.407"
                          x="440.203"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 34_2"
                          width="4.804"
                          height="8.407"
                          x="447.414"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 35_2"
                          width="4.804"
                          height="3.603"
                          x="454.613"
                          y="154.048"
                          rx="1.802"
                        ></rect>
                        <rect
                          id="Rectangle 36_2"
                          width="4.804"
                          height="3.603"
                          x="461.824"
                          y="154.048"
                          rx="1.802"
                        ></rect>
                        <rect
                          id="Rectangle 37_2"
                          width="4.804"
                          height="8.407"
                          x="469.027"
                          y="151.646"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 38_2"
                          width="4.804"
                          height="27.625"
                          x="476.238"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 39_2"
                          width="4.804"
                          height="34.831"
                          x="483.441"
                          y="138.434"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 40_2"
                          width="4.804"
                          height="44.439"
                          x="490.648"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 41_2"
                          width="4.804"
                          height="61.254"
                          x="497.852"
                          y="125.223"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 42_2"
                          width="4.804"
                          height="80.471"
                          x="505.062"
                          y="115.614"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 43_2"
                          width="4.804"
                          height="61.254"
                          x="512.266"
                          y="125.223"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 44_2"
                          width="4.804"
                          height="80.471"
                          x="519.477"
                          y="115.614"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 45_2"
                          width="4.804"
                          height="49.244"
                          x="526.676"
                          y="131.228"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 46_2"
                          width="4.804"
                          height="27.625"
                          x="533.887"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 47_2"
                          width="4.804"
                          height="49.244"
                          x="541.098"
                          y="131.228"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 48_2"
                          width="4.804"
                          height="34.831"
                          x="548.301"
                          y="138.434"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 49_2"
                          width="4.804"
                          height="61.254"
                          x="555.508"
                          y="125.223"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 50_2"
                          width="4.804"
                          height="44.439"
                          x="562.711"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 51_2"
                          width="4.804"
                          height="27.625"
                          x="569.922"
                          y="142.037"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 52_2"
                          width="4.804"
                          height="44.439"
                          x="577.125"
                          y="133.63"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 53_2"
                          width="4.804"
                          height="61.254"
                          x="584.336"
                          y="125.223"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 54_2"
                          width="4.804"
                          height="54.048"
                          x="591.535"
                          y="128.826"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 55_2"
                          width="4.804"
                          height="80.471"
                          x="598.746"
                          y="115.614"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 56_2"
                          width="4.804"
                          height="34.831"
                          x="605.949"
                          y="138.434"
                          rx="2.402"
                        ></rect>
                        <rect
                          id="Rectangle 57_2"
                          width="4.804"
                          height="22.82"
                          x="613.16"
                          y="144.439"
                          rx="2.402"
                        ></rect>
                      </g>
                      <mask
                        id="mask0_454_715"
                        width="373"
                        height="82"
                        x="245"
                        y="115"
                        maskUnits="userSpaceOnUse"
                        style={{ maskType: "alpha" }}
                      >
                        <g id="Waves_3" fill="#3A2720">
                          <rect
                            id="Rectangle 6_3"
                            width="4.804"
                            height="44.439"
                            x="245.633"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 7_3"
                            width="4.804"
                            height="44.439"
                            x="252.836"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 8_3"
                            width="4.804"
                            height="54.048"
                            x="260.043"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 9_3"
                            width="4.804"
                            height="8.407"
                            x="267.254"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 10_3"
                            width="4.804"
                            height="8.407"
                            x="274.457"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 11_3"
                            width="4.804"
                            height="34.831"
                            x="281.668"
                            y="138.434"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 12_3"
                            width="4.804"
                            height="49.244"
                            x="288.867"
                            y="131.228"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 13_3"
                            width="4.804"
                            height="34.831"
                            x="296.078"
                            y="138.434"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 14_3"
                            width="4.804"
                            height="18.016"
                            x="303.281"
                            y="146.841"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 15_3"
                            width="4.804"
                            height="54.048"
                            x="310.492"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 16_3"
                            width="4.804"
                            height="54.048"
                            x="317.695"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 17_3"
                            width="4.804"
                            height="27.625"
                            x="324.902"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 18_3"
                            width="4.804"
                            height="44.439"
                            x="332.105"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 19_3"
                            width="4.804"
                            height="80.471"
                            x="339.316"
                            y="115.614"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 20_3"
                            width="4.804"
                            height="73.265"
                            x="346.52"
                            y="119.217"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 21_3"
                            width="4.804"
                            height="54.048"
                            x="353.727"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 22_3"
                            width="4.804"
                            height="61.254"
                            x="360.93"
                            y="125.223"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 23_3"
                            width="4.804"
                            height="27.625"
                            x="368.141"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 24_3"
                            width="4.804"
                            height="44.439"
                            x="375.344"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 25_3"
                            width="4.804"
                            height="27.625"
                            x="382.555"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 26_3"
                            width="4.804"
                            height="44.439"
                            x="389.754"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 27_3"
                            width="4.804"
                            height="27.625"
                            x="396.965"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 28_3"
                            width="4.804"
                            height="54.048"
                            x="404.176"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 29_3"
                            width="4.804"
                            height="8.407"
                            x="411.379"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 30_3"
                            width="4.804"
                            height="18.016"
                            x="418.586"
                            y="146.841"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 31_3"
                            width="4.804"
                            height="27.625"
                            x="425.789"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 32_3"
                            width="4.804"
                            height="8.407"
                            x="433"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 33_3"
                            width="4.804"
                            height="8.407"
                            x="440.203"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 34_3"
                            width="4.804"
                            height="8.407"
                            x="447.414"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 35_3"
                            width="4.804"
                            height="3.603"
                            x="454.613"
                            y="154.048"
                            rx="1.802"
                          ></rect>
                          <rect
                            id="Rectangle 36_3"
                            width="4.804"
                            height="3.603"
                            x="461.824"
                            y="154.048"
                            rx="1.802"
                          ></rect>
                          <rect
                            id="Rectangle 37_3"
                            width="4.804"
                            height="8.407"
                            x="469.027"
                            y="151.646"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 38_3"
                            width="4.804"
                            height="27.625"
                            x="476.238"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 39_3"
                            width="4.804"
                            height="34.831"
                            x="483.441"
                            y="138.434"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 40_3"
                            width="4.804"
                            height="44.439"
                            x="490.648"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 41_3"
                            width="4.804"
                            height="61.254"
                            x="497.852"
                            y="125.223"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 42_3"
                            width="4.804"
                            height="80.471"
                            x="505.062"
                            y="115.614"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 43_3"
                            width="4.804"
                            height="61.254"
                            x="512.266"
                            y="125.223"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 44_3"
                            width="4.804"
                            height="80.471"
                            x="519.477"
                            y="115.614"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 45_3"
                            width="4.804"
                            height="49.244"
                            x="526.676"
                            y="131.228"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 46_3"
                            width="4.804"
                            height="27.625"
                            x="533.887"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 47_3"
                            width="4.804"
                            height="49.244"
                            x="541.098"
                            y="131.228"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 48_3"
                            width="4.804"
                            height="34.831"
                            x="548.301"
                            y="138.434"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 49_3"
                            width="4.804"
                            height="61.254"
                            x="555.508"
                            y="125.223"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 50_3"
                            width="4.804"
                            height="44.439"
                            x="562.711"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 51_3"
                            width="4.804"
                            height="27.625"
                            x="569.922"
                            y="142.037"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 52_3"
                            width="4.804"
                            height="44.439"
                            x="577.125"
                            y="133.63"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 53_3"
                            width="4.804"
                            height="61.254"
                            x="584.336"
                            y="125.223"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 54_3"
                            width="4.804"
                            height="54.048"
                            x="591.535"
                            y="128.826"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 55_3"
                            width="4.804"
                            height="80.471"
                            x="598.746"
                            y="115.614"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 56_3"
                            width="4.804"
                            height="34.831"
                            x="605.949"
                            y="138.434"
                            rx="2.402"
                          ></rect>
                          <rect
                            id="Rectangle 57_3"
                            width="4.804"
                            height="22.82"
                            x="613.16"
                            y="144.439"
                            rx="2.402"
                          ></rect>
                        </g>
                      </mask>
                      <g mask="url(#mask0_454_715)">
                        <motion.rect
                          id="Waves Masked Rect"
                          style={{ width: maskedRectWidth }}
                          x="245"
                          y="106"
                          height="98"
                          fill="#E2B4A7"
                        />
                      </g>
                    </g>
                    <motion.path
                      style={{ x: caretX }}
                      id="Caret"
                      fill="#AA3F0F"
                      d="M394.562 100h1.201v96.085h-1.201z"
                    ></motion.path>
                  </g>
                </g>
              </motion.g>
            </g>
            <g id="Group 2">
              <rect
                id="Rectangle 59"
                width="70.863"
                height="211.387"
                x="663.953"
                y="155.165"
                fill="#fff"
                fillOpacity="0.01"
                rx="35.431"
              ></rect>
              <g
                id="Frame"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.786"
              >
                <path id="Vector_2" d="M689.176 182.789h21.619"></path>
                <path
                  id="Vector_3"
                  d="M708.397 182.789v16.814c0 1.202-1.201 2.403-2.402 2.403h-12.011c-1.201 0-2.402-1.201-2.402-2.403v-16.814"
                ></path>
                <path
                  id="Vector_4"
                  d="M695.184 182.789v-2.402c0-1.202 1.201-2.403 2.402-2.403h4.804c1.201 0 2.402 1.201 2.402 2.403v2.402"
                ></path>
              </g>
              <g
                id="Frame_2"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3.786"
              >
                <path
                  id="Vector_5"
                  d="M699.39 323.614a4.054 4.054 0 0 0-4.054 4.053v9.459a4.053 4.053 0 1 0 8.107 0v-9.459a4.053 4.053 0 0 0-4.053-4.053"
                ></path>
                <path
                  id="Vector_6"
                  d="M708.85 334.424v2.702a9.458 9.458 0 1 1-18.916 0v-2.702"
                ></path>
                <path id="Vector_7" d="M699.391 346.584v4.054"></path>
              </g>
              <path
                id="0.07"
                fill="#fff"
                d="M691.204 261.047q0 2.587-.875 3.819-.883 1.251-2.74 1.251-3.535 0-3.634-4.866v-1.968q0-2.555.876-3.773.882-1.238 2.745-1.238 1.811 0 2.707 1.225.875 1.197.921 3.641zm-1.396-2.015q0-1.889-.539-2.759-.534-.869-1.693-.869-1.145 0-1.679.863-.527.85-.546 2.653v2.358q0 3.72 2.238 3.72 1.12 0 1.653-.856.54-.863.566-2.693zm3.547 6.196q0-.381.217-.612.23-.243.652-.244.428 0 .665.244.224.231.224.612a.79.79 0 0 1-.224.58q-.243.237-.665.237-.421 0-.652-.237-.217-.217-.217-.58m11.308-4.181q0 2.587-.876 3.819-.882 1.251-2.739 1.251-3.536 0-3.635-4.866v-1.968q0-2.555.876-3.773.882-1.238 2.746-1.238 1.81 0 2.706 1.225.876 1.197.922 3.641zm-1.396-2.015q0-1.889-.54-2.759-.534-.869-1.692-.869-1.146 0-1.679.863-.527.85-.547 2.653v2.358q0 3.72 2.239 3.72 1.119 0 1.653-.856.54-.863.566-2.693zm5.983 6.927h-1.456l4.794-10.397h-6.308v-1.126h7.763v.771z"
              ></path>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_454_715"
            width="365.625"
            height="362.853"
            x="515.184"
            y="53.913"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_454_715"
              stdDeviation="7.5"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_454_715"
            width="320.59"
            height="317.954"
            x="541.504"
            y="83.012"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_454_715"
              stdDeviation="6"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_454_715"
            width="251.262"
            height="257.179"
            x="566.203"
            y="127.316"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_454_715"
              stdDeviation="4"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_454_715"
            width="203.969"
            height="205.725"
            x="595.035"
            y="179.602"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_454_715"
              stdDeviation="2"
            ></feGaussianBlur>
          </filter>
          <clipPath
            id="bgblur_1_454_715_clip_path"
            transform="translate(51.653 -60.511)"
          >
            <path d="M43 194.799c0-21.89 17.745-39.635 39.635-39.635h497.241c21.89 0 39.635 17.745 39.635 39.635v177.758H82.635c-21.89 0-39.635-17.745-39.635-39.635z"></path>
            <path d="M619.511 342.53v.994c.345 1.954 2.677 6.899 15.614 15.821 14.682 10.126 30.027 13.212 30.027 13.212h-45.641v-29.033c-.119-.676 0-.994 0-.994"></path>
          </clipPath>
          <clipPath id="clip0_454_715">
            <path fill="#fff" d="M0 0h915v442H0z"></path>
          </clipPath>
        </defs>
      </motion.svg>
    </>
  );
});
