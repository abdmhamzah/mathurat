import { COLOR, FONTS } from "../styles";

export default function fontArabChecker(font, size) {
  if (font === "Lateef") {
    if (size == 30) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab5 };
    }
    if (size == 35) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab4 };
    }
    if (size == 40) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab3 };
    }
    if (size == 45) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab2 };
    }
    if (size == 50) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arab1 };
    }
  }
  if (font === "Uthmani") {
    if (size == 30) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arabUthmani5 };
    }
    if (size == 35) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arabUthmani4 };
    }
    if (size == 40) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arabUthmani3 };
    }
    if (size == 45) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arabUthmani2 };
    }
    if (size == 50) {
      return { textAlign: "center", color: COLOR.gray, ...FONTS.arabUthmani1 };
    }
  }
}
