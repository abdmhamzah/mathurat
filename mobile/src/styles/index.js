import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const primary = "#312c51";
const secondary = "#48426d";
const warning = "#f0c38e";
const danger = "#f1aa9b";
const basic = "#fff";

const styles = StyleSheet.create({
  header_bar: {
    backgroundColor: primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header_title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: secondary,
  },
  list_menu: {
    flex: 1,
    backgroundColor: warning,
  },
  setting_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: secondary,
    borderTopWidth: 1,
    paddingHorizontal: screenWidth / 18,
    paddingVertical: screenHeight / 100,
    backgroundColor: primary,
  },
  setting_section: {
    marginHorizontal: screenWidth / 20,
    marginTop: 20,
    marginBottom: 10,
    color: warning,
    fontSize: 14,
    fontFamily: "circular",
  },
  setting_title: {
    flex: 10,
    color: basic,
    fontSize: 18,
    fontFamily: "circular",
  },
  setting_switch: {
    flex: 1,
    alignItems: "flex-end",
  },
  home_headbar: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: screenWidth / 22,
    paddingTop: 60,
    backgroundColor: primary,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: screenHeight / 3,
  },
  home_menu: {
    flex: 9,
  },
  home_title: {
    flex: 1,
    fontFamily: "circularBold",
    fontSize: 30,
    color: danger,
  },
  home_setting: {
    color: danger,
    textAlign: "right",
    marginRight: 5,
  },
  home_setting_disabled: {
    color: secondary,
    textAlign: "right",
    marginRight: 5,
  },
  set_icon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  header_icon_active: {
    color: danger,
    textAlign: "right",
    marginRight: 30,
  },
  header_icon_inactive: {
    color: basic,
    textAlign: "right",
    marginRight: 30,
  },
  scroll_screen: {
    flexGrow: 1,
    backgroundColor: secondary,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    width: screenWidth / 2.5,
    marginHorizontal: screenWidth / 22,
    marginVertical: 20,
    paddingBottom: 25,
    borderRadius: 8,
  },
  button_list: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    width: screenWidth - (screenWidth * 2) / 22,
    marginHorizontal: screenWidth / 22,
    marginVertical: 5,
    borderRadius: 8,
  },
  button_dzikir: {
    height: screenHeight / 3,
    width: screenWidth / 1.35,
    borderRadius: screenHeight / 3,
    backgroundColor: primary,
    alignItems: "center",
    justifyContent: "center",
  },
  dzikir_setting: {
    display: "flex",
    flexDirection: "row",
    marginTop: 100,
    marginHorizontal: 12,
  },
  dzikir_setting_button: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: primary,
    padding: 18,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  count: {
    color: basic,
    fontSize: 70,
  },
  title: {
    marginHorizontal: 14,
    marginTop: 14,
    color: warning,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "circularBold",
  },
  logo: {
    height: screenWidth / 5,
    width: screenWidth / 5,
    marginTop: 25,
  },
  card_dua: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 8,
    marginVertical: 12,
    width: screenWidth - 40,
  },
  title_detail: {
    marginHorizontal: 14,
    marginVertical: 14,
    color: warning,
    fontSize: 18,
    textAlign: "center",
    fontFamily: "circularBold",
  },
  card_detail_judul: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 8,
    width: screenWidth,
    width: screenWidth - 40,
    marginTop: 12,
  },
  card_detail_arab: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 8,
    width: screenWidth,
    width: screenWidth - 40,
    marginTop: 10,
  },
  card_detail_terjemah: {
    flex: 1,
    alignItems: "center",
    backgroundColor: primary,
    borderRadius: 8,
    width: screenWidth,
    width: screenWidth - 40,
    marginTop: 10,
    marginBottom: 40,
    paddingTop: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: screenWidth - 70,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  judul: {
    flex: 2,
    textAlign: "right",
    fontSize: 18,
    color: warning,
    fontFamily: "circular",
  },
  judul_doa: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: warning,
    fontFamily: "circular",
  },
  pengulangan: {
    flex: 1,
    fontSize: 18,
    color: warning,
    fontFamily: "circular",
  },
  arabic: {
    fontFamily: "lateef",
    fontSize: 32,
    color: basic,
    fontWeight: "400",
    marginTop: 10,
    marginBottom: 15,
    paddingHorizontal: 25,
    textAlign: "center",
  },
  info: {
    width: screenWidth - 85,
    color: danger,
    fontSize: 14,
    textAlign: "left",
  },
  info_menu: {
    marginBottom: 20,
    marginTop: 10,
    color: basic,
    paddingHorizontal: 25,
    textAlign: "center",
    fontFamily: "circular",
    fontSize: 18,
  },
  terjemah: {
    marginBottom: 20,
    marginTop: 10,
    color: basic,
    paddingHorizontal: 25,
    textAlign: "left",
    fontFamily: "circular",
    fontSize: 18,
    lineHeight: 30,
  },
  fadilah: {
    marginTop: 5,
    marginBottom: 20,
    color: basic,
    fontStyle: "italic",
  },
});

export { styles, primary, secondary, warning, danger, basic };
