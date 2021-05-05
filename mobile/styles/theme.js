import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLOR = {
  primary: "#312c51", // dark purple
  secondary: "#48426d", // light purple

  warning: "#f0c38e", // yellow
  danger: "#f1aa9b", // pink

  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#FCFBFC",
  gray: "#C1C3C5",
  darkgray: "#C3C6C7",

  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  title: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
  arab1: 44,
  arab2: 38,
  arab3: 32,
  arab4: 30,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  title: { fontFamily: "circular", fontSize: SIZES.title, lineHeight: 55 },
  h1: { fontFamily: "circularBold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "circularBold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "circularBold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "circularBold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "circular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "circular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "circular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "circular", fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: "circular", fontSize: SIZES.body5, lineHeight: 22 },
  arab1: { fontFamily: "lateef", fontSize: SIZES.arab1, lineHeight: 55 },
  arab2: { fontFamily: "lateef", fontSize: SIZES.arab2, lineHeight: 50 },
  arab3: { fontFamily: "lateef", fontSize: SIZES.arab3, lineHeight: 22 },
  arab4: { fontFamily: "lateef", fontSize: SIZES.arab4, lineHeight: 22 },
  arab5: { fontFamily: "lateef", fontSize: SIZES.arab5, lineHeight: 22 },
};

export default { COLOR, SIZES, FONTS };
