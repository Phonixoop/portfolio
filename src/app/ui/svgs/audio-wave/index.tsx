import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";

type AudioWaveProps = {
  className?: string;
};

export const AudioWave = React.forwardRef<
  HTMLDivElement,
  AudioWaveProps & { containerRef?: React.RefObject<HTMLDivElement> }
>(({ className, containerRef, ...props }, ref) => {
  // Use the passed ref, fallback to internal ref if not provided
  const { scrollYProgress } = useScroll({
    target: containerRef ?? (ref as React.RefObject<HTMLDivElement>),
    offset: ["start start", "35% start"],
  });

  // Map scrollYProgress (0 to 1) to y movement (0 to 40)
  const y = useTransform(scrollYProgress, [0, 1], [0, 43]);

  return (
    <>
      <motion.svg
        initial="rest"
        whileHover="hover"
        className={className}
        fill={"none"}
        viewBox="0 0 607 366"
      >
        <g id="Group 4">
          <g id="Bubble Group">
            <g
              id="Bubble 4"
              clipPath="url(#clip0_340_139)"
              filter="url(#filter0_f_340_139)"
            >
              <path
                id="Vector"
                fill="#AA3F0F"
                fillOpacity="0.7"
                d="M473.068 203.013c-5.946 11.194-13.226 22.857-25.468 27.211s-29.431 1.046-46.394-2.399c-16.746-3.405-33.47-7.34-48.727-14.922-15.475-7.622-29.7-18.931-35.088-31.833-5.613-12.765-2.402-26.77-1.796-41.428.389-14.696-1.617-29.829 4.539-40.807s20.909-17.722 36.742-18.753c15.84-1.208 32.977 3.336 50.412 5.977 17.21 2.778 35.154 3.733 49.112 10.9 13.734 7.305 23.693 21.04 28.405 34.352 4.488 13.45 3.948 26.518 1.267 38.307-2.47 12.005-7.066 22.377-13.004 33.395"
              ></path>
            </g>
            <g
              id="Bubble 3"
              clipPath="url(#clip1_340_139)"
              filter="url(#filter1_f_340_139)"
            >
              <path
                id="Vector_2"
                fill="#AA3F0F"
                fillOpacity="0.8"
                d="M467.776 200.51c-5.408 9.798-12.003 19.996-22.888 23.715-10.884 3.719-26.041.649-40.996-2.54-14.764-3.153-29.501-6.771-42.892-13.586-13.583-6.852-26.012-16.938-30.604-28.344-4.793-11.288-1.765-23.586-1.033-36.482.541-12.933-1.03-26.272 4.561-35.878 5.591-9.605 18.728-15.405 32.744-16.166 14.024-.916 29.119 3.242 44.502 5.728 15.183 2.605 31.039 3.611 43.287 10.049 12.048 6.557 20.671 18.738 24.66 30.5 3.789 11.88 3.136 23.378.607 33.73-2.345 10.544-6.549 19.631-11.948 29.274"
              ></path>
            </g>
            <g
              id="Bubble 2"
              clipPath="url(#clip2_340_139)"
              filter="url(#filter2_f_340_139)"
            >
              <path
                id="Vector_3"
                fill="#AA3F0F"
                fillOpacity="0.9"
                d="M449.433 139.306c8.945 6.998 18.197 14.913 21.057 23.341s-.966 17.25-4.891 25.897c-3.879 8.535-8.197 16.888-15.459 23.232-7.309 6.456-17.608 11.014-28.681 9.984-10.974-.858-22.429-7.183-34.589-12.22-12.207-4.925-24.927-8.613-33.679-15.662s-13.443-17.686-13.314-27.116c-.017-9.49 4.834-17.886 8.12-27.062 3.386-9.003 5.299-19.01 12.136-24.74 6.936-5.556 18.987-6.886 30.361-5.336 11.473 1.723 22.315 6.214 31.958 11.525 9.837 5.26 18.182 11.219 26.981 18.157"
              ></path>
            </g>
            <g
              id="Bubble 1"
              clipPath="url(#clip3_340_139)"
              filter="url(#filter3_f_340_139)"
            >
              <path
                id="Vector_4"
                fill="#AA3F0F"
                fillOpacity="0.98"
                d="M385.63 206.846c-8.684-4.287-17.844-9.294-22.255-15.902-4.412-6.607-3.819-14.765-3.104-22.795.709-7.927 1.802-15.78 5.675-22.47 3.879-6.793 10.544-12.528 19.277-13.676 8.611-1.277 19.035 1.983 29.657 4.025 10.628 1.939 21.32 2.738 29.87 7.104 8.549 4.366 14.944 12.506 17.335 20.505 2.52 8.024 1.032 16.01.945 24.37-.209 8.233.972 17.046-2.737 23.139-3.832 5.965-12.689 9.289-21.789 10.053-9.221.635-18.692-1.185-27.463-3.918-8.905-2.655-16.856-6.173-25.411-10.435"
              ></path>
            </g>
          </g>
          <g id="Group 3">
            <g id="Group 1">
              <foreignObject
                width="466.955"
                height="269.029"
                x="10.256"
                y="91.988"
              >
                <div
                  style={{
                    clipPath: "url(#bgblur_4_340_139_clip_path)",
                    backdropFilter: "blur(25px)",
                    height: "100%",
                    width: "100%",
                  }}
                ></div>
              </foreignObject>
              <g
                id="Vector_5"
                fill="#B17762"
                fillOpacity="0.4"
                data-figma-bg-blur-radius="50"
              >
                <path d="M62.81 234.319c-5.781-10.014-1.414-20.558 9.755-23.551l253.715-67.983c11.17-2.993 24.911 2.699 30.693 12.713l46.949 81.32-273.938 73.401c-11.169 2.993-24.911-2.699-30.692-12.713z"></path>
                <path d="m395.992 223.081.262.455c.692.847 3.188 2.79 12.146 5.103 10.165 2.625 18.81 1.939 18.81 1.939l-23.288 6.24-7.668-13.282c-.239-.293-.262-.455-.262-.455"></path>
              </g>
              <circle
                id="Shadow Button"
                cx="22.523"
                cy="22.523"
                r="22.523"
                fill="#000"
                fillOpacity="0.2"
                transform="matrix(.96593 -.25882 .5 .86603 80.922 231.37)"
              ></circle>
              <g id="Shadow Wave" fill="#000" fillOpacity="0.2">
                <g id="Waves">
                  <g id="played waves">
                    <rect
                      id="Rectangle 6"
                      width="2.538"
                      height="23.475"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 150.049 223.632)"
                    ></rect>
                    <rect
                      id="Rectangle 7"
                      width="2.538"
                      height="23.475"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 153.727 222.647)"
                    ></rect>
                    <rect
                      id="Rectangle 8"
                      width="2.538"
                      height="28.55"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 156.135 219.464)"
                    ></rect>
                    <rect
                      id="Rectangle 9"
                      width="2.538"
                      height="4.441"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 165.838 228.918)"
                    ></rect>
                    <rect
                      id="Rectangle 10"
                      width="2.538"
                      height="4.441"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 169.516 227.933)"
                    ></rect>
                    <rect
                      id="Rectangle 11"
                      width="2.538"
                      height="18.399"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 169.703 220.904)"
                    ></rect>
                    <rect
                      id="Rectangle 12"
                      width="2.538"
                      height="26.013"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 171.477 216.622)"
                    ></rect>
                    <rect
                      id="Rectangle 13"
                      width="2.538"
                      height="18.399"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 177.057 218.933)"
                    ></rect>
                    <rect
                      id="Rectangle 14"
                      width="2.538"
                      height="9.517"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 182.955 221.794)"
                    ></rect>
                    <rect
                      id="Rectangle 15"
                      width="2.538"
                      height="28.55"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 181.873 212.567)"
                    ></rect>
                    <rect
                      id="Rectangle 16"
                      width="2.538"
                      height="28.55"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 185.551 211.582)"
                    ></rect>
                    <rect
                      id="Rectangle 17"
                      width="2.538"
                      height="14.592"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 192.717 216.641)"
                    ></rect>
                    <rect
                      id="Rectangle 18"
                      width="2.538"
                      height="23.475"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 194.174 211.809)"
                    ></rect>
                    <rect
                      id="Rectangle 19"
                      width="2.538"
                      height="42.509"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 193.092 202.582)"
                    ></rect>
                    <rect
                      id="Rectangle 20"
                      width="2.538"
                      height="38.702"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 197.721 203.245)"
                    ></rect>
                    <rect
                      id="Rectangle 21"
                      width="2.538"
                      height="28.55"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 203.936 206.656)"
                    ></rect>
                    <rect
                      id="Rectangle 22"
                      width="2.538"
                      height="32.357"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 206.66 204.022)"
                    ></rect>
                    <rect
                      id="Rectangle 23"
                      width="2.538"
                      height="14.592"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 214.779 210.729)"
                    ></rect>
                    <rect
                      id="Rectangle 24"
                      width="2.538"
                      height="23.475"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 216.236 205.898)"
                    ></rect>
                    <rect
                      id="Rectangle 25"
                      width="2.538"
                      height="14.592"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 222.133 208.759)"
                    ></rect>
                    <rect
                      id="Rectangle 26"
                      width="2.538"
                      height="23.475"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 223.59 203.927)"
                    ></rect>
                  </g>
                  <rect
                    id="Rectangle 27"
                    width="2.538"
                    height="14.592"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 229.488 206.788)"
                  ></rect>
                  <rect
                    id="Rectangle 28"
                    width="2.538"
                    height="28.55"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 229.676 199.759)"
                  ></rect>
                  <rect
                    id="Rectangle 29"
                    width="2.538"
                    height="4.441"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 239.379 209.213)"
                  ></rect>
                  <rect
                    id="Rectangle 30"
                    width="2.538"
                    height="9.517"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 241.787 206.03)"
                  ></rect>
                  <rect
                    id="Rectangle 31"
                    width="2.538"
                    height="14.592"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 244.195 202.847)"
                  ></rect>
                  <rect
                    id="Rectangle 32"
                    width="2.538"
                    height="4.441"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 250.41 206.257)"
                  ></rect>
                  <rect
                    id="Rectangle 33"
                    width="2.538"
                    height="4.441"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 254.088 205.272)"
                  ></rect>
                  <rect
                    id="Rectangle 34"
                    width="2.538"
                    height="4.441"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 257.764 204.287)"
                  ></rect>
                  <rect
                    id="Rectangle 35"
                    width="2.538"
                    height="1.903"
                    rx="0.952"
                    transform="matrix(.96593 -.25882 .5 .86603 262.076 204.401)"
                  ></rect>
                  <rect
                    id="Rectangle 36"
                    width="2.538"
                    height="1.903"
                    rx="0.952"
                    transform="matrix(.96593 -.25882 .5 .86603 265.754 203.415)"
                  ></rect>
                  <rect
                    id="Rectangle 37"
                    width="2.538"
                    height="4.441"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 268.795 201.331)"
                  ></rect>
                  <rect
                    id="Rectangle 38"
                    width="2.538"
                    height="14.592"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 269.936 195.95)"
                  ></rect>
                  <rect
                    id="Rectangle 39"
                    width="2.538"
                    height="18.399"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 272.66 193.317)"
                  ></rect>
                  <rect
                    id="Rectangle 40"
                    width="2.538"
                    height="23.475"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 275.068 190.134)"
                  ></rect>
                  <rect
                    id="Rectangle 41"
                    width="2.538"
                    height="32.357"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 276.525 185.302)"
                  ></rect>
                  <rect
                    id="Rectangle 42"
                    width="2.538"
                    height="42.509"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 277.664 179.921)"
                  ></rect>
                  <rect
                    id="Rectangle 43"
                    width="2.538"
                    height="32.357"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 283.879 183.332)"
                  ></rect>
                  <rect
                    id="Rectangle 44"
                    width="2.538"
                    height="42.509"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 285.018 177.951)"
                  ></rect>
                  <rect
                    id="Rectangle 45"
                    width="2.538"
                    height="26.013"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 292.818 184.108)"
                  ></rect>
                  <rect
                    id="Rectangle 46"
                    width="2.538"
                    height="14.592"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 299.352 188.068)"
                  ></rect>
                  <rect
                    id="Rectangle 47"
                    width="2.538"
                    height="26.013"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 300.174 182.138)"
                  ></rect>
                  <rect
                    id="Rectangle 48"
                    width="2.538"
                    height="18.399"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 305.754 184.449)"
                  ></rect>
                  <rect
                    id="Rectangle 49"
                    width="2.538"
                    height="32.357"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 305.941 177.42)"
                  ></rect>
                  <rect
                    id="Rectangle 50"
                    width="2.538"
                    height="23.475"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 311.838 180.281)"
                  ></rect>
                  <rect
                    id="Rectangle 51"
                    width="2.538"
                    height="14.592"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 317.736 183.142)"
                  ></rect>
                  <rect
                    id="Rectangle 52"
                    width="2.538"
                    height="23.475"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 319.193 178.31)"
                  ></rect>
                  <rect
                    id="Rectangle 53"
                    width="2.538"
                    height="32.357"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 320.648 173.479)"
                  ></rect>
                  <rect
                    id="Rectangle 54"
                    width="2.538"
                    height="28.55"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 325.277 174.142)"
                  ></rect>
                  <rect
                    id="Rectangle 55"
                    width="2.538"
                    height="42.509"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 325.465 167.113)"
                  ></rect>
                  <rect
                    id="Rectangle 56"
                    width="2.538"
                    height="18.399"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 335.17 176.567)"
                  ></rect>
                  <rect
                    id="Rectangle 57"
                    width="2.538"
                    height="12.055"
                    rx="1.269"
                    transform="matrix(.96593 -.25882 .5 .86603 340.434 178.329)"
                  ></rect>
                </g>
                <path
                  id="Rectangle 58"
                  d="M0 0h.634v50.757H0z"
                  transform="matrix(.96593 -.25882 .5 .86603 217.16 187.886)"
                ></path>
              </g>

              <motion.g
                id="Floated Group"
                // variants={{
                //   rest: { y: 0 },
                //   hover: { y: "44px" }, // move up 20px
                // }}
                style={{ y }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <g id="Floated Button">
                  <circle
                    id="Ellipse 1"
                    cx="22.523"
                    cy="22.523"
                    r="22.523"
                    fill="#AA3F0F"
                    transform="matrix(.96593 -.25882 .5 .86603 80.998 187.659)"
                  ></circle>
                  <path
                    id="Polygon 1"
                    fill="#D9D9D9"
                    d="m126.577 197.968-13.212 14.805-11.264-19.51z"
                  ></path>
                </g>
                <g id="Floated Wave">
                  <g id="Waves_2">
                    <g id="played waves_2" fill="#E2B4A7">
                      <rect
                        id="Rectangle 6_2"
                        width="2.538"
                        height="23.475"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 150.043 178.632)"
                      ></rect>
                      <rect
                        id="Rectangle 7_2"
                        width="2.538"
                        height="23.475"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 153.721 177.647)"
                      ></rect>
                      <rect
                        id="Rectangle 8_2"
                        width="2.538"
                        height="28.55"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 156.129 174.464)"
                      ></rect>
                      <rect
                        id="Rectangle 9_2"
                        width="2.538"
                        height="4.441"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 165.832 183.918)"
                      ></rect>
                      <rect
                        id="Rectangle 10_2"
                        width="2.538"
                        height="4.441"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 169.51 182.933)"
                      ></rect>
                      <rect
                        id="Rectangle 11_2"
                        width="2.538"
                        height="18.399"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 169.697 175.904)"
                      ></rect>
                      <rect
                        id="Rectangle 12_2"
                        width="2.538"
                        height="26.013"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 171.471 171.622)"
                      ></rect>
                      <rect
                        id="Rectangle 13_2"
                        width="2.538"
                        height="18.399"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 177.051 173.933)"
                      ></rect>
                      <rect
                        id="Rectangle 14_2"
                        width="2.538"
                        height="9.517"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 182.949 176.794)"
                      ></rect>
                      <rect
                        id="Rectangle 15_2"
                        width="2.538"
                        height="28.55"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 181.867 167.567)"
                      ></rect>
                      <rect
                        id="Rectangle 16_2"
                        width="2.538"
                        height="28.55"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 185.545 166.582)"
                      ></rect>
                      <rect
                        id="Rectangle 17_2"
                        width="2.538"
                        height="14.592"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 192.711 171.64)"
                      ></rect>
                      <rect
                        id="Rectangle 18_2"
                        width="2.538"
                        height="23.475"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 194.168 166.809)"
                      ></rect>
                      <rect
                        id="Rectangle 19_2"
                        width="2.538"
                        height="42.509"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 193.086 157.582)"
                      ></rect>
                      <rect
                        id="Rectangle 20_2"
                        width="2.538"
                        height="38.702"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 197.715 158.245)"
                      ></rect>
                      <rect
                        id="Rectangle 21_2"
                        width="2.538"
                        height="28.55"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 203.93 161.655)"
                      ></rect>
                      <rect
                        id="Rectangle 22_2"
                        width="2.538"
                        height="32.357"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 206.654 159.022)"
                      ></rect>
                      <rect
                        id="Rectangle 23_2"
                        width="2.538"
                        height="14.592"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 214.773 165.729)"
                      ></rect>
                      <rect
                        id="Rectangle 24_2"
                        width="2.538"
                        height="23.475"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 216.23 160.897)"
                      ></rect>
                      <rect
                        id="Rectangle 25_2"
                        width="2.538"
                        height="14.592"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 222.127 163.758)"
                      ></rect>
                      <rect
                        id="Rectangle 26_2"
                        width="2.538"
                        height="23.475"
                        rx="1.269"
                        transform="matrix(.96593 -.25882 .5 .86603 223.584 158.927)"
                      ></rect>
                    </g>
                    <rect
                      id="Rectangle 27_2"
                      width="2.538"
                      height="14.592"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 229.482 161.788)"
                    ></rect>
                    <rect
                      id="Rectangle 28_2"
                      width="2.538"
                      height="28.55"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 229.67 154.759)"
                    ></rect>
                    <rect
                      id="Rectangle 29_2"
                      width="2.538"
                      height="4.441"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 239.373 164.213)"
                    ></rect>
                    <rect
                      id="Rectangle 30_2"
                      width="2.538"
                      height="9.517"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 241.781 161.03)"
                    ></rect>
                    <rect
                      id="Rectangle 31_2"
                      width="2.538"
                      height="14.592"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 244.189 157.847)"
                    ></rect>
                    <rect
                      id="Rectangle 32_2"
                      width="2.538"
                      height="4.441"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 250.404 161.257)"
                    ></rect>
                    <rect
                      id="Rectangle 33_2"
                      width="2.538"
                      height="4.441"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 254.082 160.272)"
                    ></rect>
                    <rect
                      id="Rectangle 34_2"
                      width="2.538"
                      height="4.441"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 257.758 159.287)"
                    ></rect>
                    <rect
                      id="Rectangle 35_2"
                      width="2.538"
                      height="1.903"
                      fill="#3A2720"
                      rx="0.952"
                      transform="matrix(.96593 -.25882 .5 .86603 262.07 159.4)"
                    ></rect>
                    <rect
                      id="Rectangle 36_2"
                      width="2.538"
                      height="1.903"
                      fill="#3A2720"
                      rx="0.952"
                      transform="matrix(.96593 -.25882 .5 .86603 265.748 158.415)"
                    ></rect>
                    <rect
                      id="Rectangle 37_2"
                      width="2.538"
                      height="4.441"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 268.789 156.331)"
                    ></rect>
                    <rect
                      id="Rectangle 38_2"
                      width="2.538"
                      height="14.592"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 269.93 150.95)"
                    ></rect>
                    <rect
                      id="Rectangle 39_2"
                      width="2.538"
                      height="18.399"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 272.654 148.316)"
                    ></rect>
                    <rect
                      id="Rectangle 40_2"
                      width="2.538"
                      height="23.475"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 275.062 145.133)"
                    ></rect>
                    <rect
                      id="Rectangle 41_2"
                      width="2.538"
                      height="32.357"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 276.52 140.302)"
                    ></rect>
                    <rect
                      id="Rectangle 42_2"
                      width="2.538"
                      height="42.509"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 277.658 134.921)"
                    ></rect>
                    <rect
                      id="Rectangle 43_2"
                      width="2.538"
                      height="32.357"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 283.873 138.331)"
                    ></rect>
                    <rect
                      id="Rectangle 44_2"
                      width="2.538"
                      height="42.509"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 285.012 132.95)"
                    ></rect>
                    <rect
                      id="Rectangle 45_2"
                      width="2.538"
                      height="26.013"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 292.812 139.108)"
                    ></rect>
                    <rect
                      id="Rectangle 46_2"
                      width="2.538"
                      height="14.592"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 299.346 143.068)"
                    ></rect>
                    <rect
                      id="Rectangle 47_2"
                      width="2.538"
                      height="26.013"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 300.168 137.138)"
                    ></rect>
                    <rect
                      id="Rectangle 48_2"
                      width="2.538"
                      height="18.399"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 305.748 139.449)"
                    ></rect>
                    <rect
                      id="Rectangle 49_2"
                      width="2.538"
                      height="32.357"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 305.936 132.42)"
                    ></rect>
                    <rect
                      id="Rectangle 50_2"
                      width="2.538"
                      height="23.475"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 311.832 135.281)"
                    ></rect>
                    <rect
                      id="Rectangle 51_2"
                      width="2.538"
                      height="14.592"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 317.73 138.142)"
                    ></rect>
                    <rect
                      id="Rectangle 52_2"
                      width="2.538"
                      height="23.475"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 319.188 133.31)"
                    ></rect>
                    <rect
                      id="Rectangle 53_2"
                      width="2.538"
                      height="32.357"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 320.643 128.479)"
                    ></rect>
                    <rect
                      id="Rectangle 54_2"
                      width="2.538"
                      height="28.55"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 325.271 129.142)"
                    ></rect>
                    <rect
                      id="Rectangle 55_2"
                      width="2.538"
                      height="42.509"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 325.459 122.113)"
                    ></rect>
                    <rect
                      id="Rectangle 56_2"
                      width="2.538"
                      height="18.399"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 335.164 131.567)"
                    ></rect>
                    <rect
                      id="Rectangle 57_2"
                      width="2.538"
                      height="12.055"
                      fill="#3A2720"
                      rx="1.269"
                      transform="matrix(.96593 -.25882 .5 .86603 340.428 133.329)"
                    ></rect>
                  </g>
                  <path
                    id="Rectangle 58_2"
                    fill="#AA3F0F"
                    d="M0 0h.634v50.757H0z"
                    transform="matrix(.96593 -.25882 .5 .86603 217.154 142.885)"
                  ></path>
                </g>
              </motion.g>
            </g>
            <g id="Group 2">
              <rect
                id="Rectangle 59"
                width="37.433"
                height="111.664"
                fill="#fff"
                fillOpacity="0.01"
                rx="18.716"
                transform="matrix(.96593 -.25882 .5 .86603 369.18 131.291)"
              ></rect>
              <g
                id="Frame"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#clip5_340_139)"
              >
                <path id="Vector_6" d="m389.346 140.48 11.031-2.956"></path>
                <path
                  id="Vector_7"
                  d="m399.15 137.853 4.441 7.692a.98.98 0 0 1-.591 1.428l-6.128 1.642c-.613.164-1.543-.221-1.86-.771l-4.442-7.692"
                ></path>
                <path
                  id="Vector_8"
                  d="m392.41 139.659-.635-1.099a.98.98 0 0 1 .591-1.427l2.452-.657c.612-.164 1.543.221 1.86.77l.634 1.099"
                ></path>
              </g>
              <g
                id="Frame_2"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                clipPath="url(#clip6_340_139)"
              >
                <path
                  id="Vector_9"
                  d="M431.748 203.508c-.549.147-.962.483-1.149.935s-.133.982.151 1.474l2.499 4.327c.283.491.774.905 1.362 1.148.589.244 1.228.299 1.776.152.549-.147.962-.484 1.149-.935s.133-.982-.151-1.474l-2.498-4.327c-.284-.492-.774-.905-1.363-1.149s-1.227-.298-1.776-.151"
                ></path>
                <path
                  id="Vector_10"
                  d="m439.43 207.16.713 1.236c.663 1.148.79 2.385.353 3.439-.436 1.053-1.401 1.838-2.681 2.181s-2.77.216-4.144-.353c-1.373-.569-2.517-1.533-3.18-2.681l-.714-1.236"
                ></path>
                <path id="Vector_11" d="m437.816 214.016 1.071 1.855"></path>
              </g>
              <path
                id="0.07"
                fill="#fff"
                d="M412.038 175.927q.684 1.185.562 1.867-.12.693-1.067.947-1.805.483-3.14-1.729l-.52-.901q-.675-1.168-.55-1.845.123-.687 1.074-.942.924-.248 1.705.19.763.429 1.432 1.54zm-1.244-.73q-.5-.865-1.005-1.189a1.3 1.3 0 0 0-1.093-.166q-.584.156-.628.624-.045.46.422 1.289l.622 1.078q.983 1.702 2.125 1.396.572-.153.617-.618.048-.468-.422-1.309zm3.446 2.349q-.102-.175-.051-.31.053-.143.268-.2a.6.6 0 0 1 .404.02.58.58 0 0 1 .276.25q.093.162.038.296-.061.141-.276.199a.6.6 0 0 1-.395-.019.53.53 0 0 1-.264-.236m4.665-3.459q.684 1.185.562 1.867-.12.693-1.067.947-1.805.483-3.14-1.729l-.52-.901q-.675-1.168-.55-1.845.124-.687 1.074-.942.924-.248 1.705.19.763.429 1.432 1.54zm-1.244-.731q-.5-.864-1.004-1.188a1.3 1.3 0 0 0-1.093-.166q-.585.156-.629.624-.045.46.422 1.289l.622 1.078q.983 1.702 2.125 1.396.572-.153.617-.618.048-.468-.422-1.309zm4.882 2.351-.743.199-.3-5.411-3.218.862-.298-.515 3.961-1.061.204.352z"
              ></path>
            </g>
          </g>
        </g>
        <defs>
          <clipPath
            id="bgblur_4_340_139_clip_path"
            transform="translate(-10.256 -91.988)"
          >
            <path d="M62.81 234.319c-5.781-10.014-1.414-20.558 9.755-23.551l253.715-67.983c11.17-2.993 24.911 2.699 30.693 12.713l46.949 81.32-273.938 73.401c-11.169 2.993-24.911-2.699-30.692-12.713z"></path>
            <path d="m395.992 223.081.262.455c.692.847 3.188 2.79 12.146 5.103 10.165 2.625 18.81 1.939 18.81 1.939l-23.288 6.24-7.668-13.282c-.239-.293-.262-.455-.262-.455"></path>
          </clipPath>
          <clipPath id="clip0_340_139">
            <path
              fill="#fff"
              d="M516.453 87.256 509.15 263.85l-217.667-39.636 7.303-176.595z"
            ></path>
          </clipPath>
          <clipPath id="clip1_340_139">
            <path
              fill="#fff"
              d="m507.695 99.02-8.825 155.374-191.965-36.903 8.825-155.373z"
            ></path>
          </clipPath>
          <clipPath id="clip2_340_139">
            <path
              fill="#fff"
              d="m355.803 77.342 146.512 60.687-46.567 112.422-146.512-60.687z"
            ></path>
          </clipPath>
          <clipPath id="clip3_340_139">
            <path
              fill="#fff"
              d="M473.537 242.174 345.56 217.572l5.884-103.582 127.976 24.602z"
            ></path>
          </clipPath>
          <clipPath id="clip5_340_139">
            <path
              fill="#fff"
              d="m385.604 137.676 14.708-3.941 7.614 13.187-14.709 3.941z"
            ></path>
          </clipPath>
          <clipPath id="clip6_340_139">
            <path
              fill="#fff"
              d="m422.762 204.488 16.546-4.434 8.565 14.835-16.546 4.434z"
            ></path>
          </clipPath>
          <filter
            id="filter0_f_340_139"
            width="240.971"
            height="232.231"
            x="283.482"
            y="39.619"
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
              result="effect1_foregroundBlur_340_139"
              stdDeviation="4"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter1_f_340_139"
            width="212.789"
            height="204.276"
            x="300.906"
            y="56.118"
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
              result="effect1_foregroundBlur_340_139"
              stdDeviation="3"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter2_f_340_139"
            width="201.078"
            height="181.109"
            x="305.236"
            y="73.342"
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
              result="effect1_foregroundBlur_340_139"
              stdDeviation="2"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter3_f_340_139"
            width="137.859"
            height="132.184"
            x="343.561"
            y="111.991"
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
              result="effect1_foregroundBlur_340_139"
              stdDeviation="1"
            ></feGaussianBlur>
          </filter>
        </defs>
      </motion.svg>
    </>
  );
});
