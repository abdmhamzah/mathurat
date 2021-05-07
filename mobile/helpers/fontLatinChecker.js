import { COLOR, FONTS } from "../styles";

export default function fontLatinChecker(size) {
  if (size == 12) {
    return { textAlign: "left", color: COLOR.gray, ...FONTS.body5 };
  }
  if (size == 14) {
    return { textAlign: "left", color: COLOR.gray, ...FONTS.body4 };
  }
  if (size == 16) {
    return { textAlign: "left", color: COLOR.gray, ...FONTS.body3 };
  }
  if (size == 18) {
    return { textAlign: "left", color: COLOR.gray, ...FONTS.body2 };
  }
  if (size == 20) {
    return { textAlign: "left", color: COLOR.gray, ...FONTS.body1 };
  }
}
