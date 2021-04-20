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
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  header_title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: secondary,
  },
  menu: {
    flexGrow: 1,
    justifyContent: "center",
  },
  list_menu: {
    flex: 1,
    backgroundColor: warning,
  },
  home_headbar: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: screenWidth / 22,
    paddingTop: 60,
    backgroundColor: primary,
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
  title: {
    paddingHorizontal: 14,
    marginTop: 25,
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
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth - 70,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  judul: {
    flex: 1,
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
    fontSize: 30,
    color: basic,
    fontWeight: "400",
    marginTop: 20,
    paddingHorizontal: 25,
    textAlign: "center",
  },
  terjemah: {
    marginVertical: 20,
    color: basic,
    paddingHorizontal: 25,
    marginBottom: 35,
    textAlign: "center",
    fontFamily: "circular",
    fontSize: 16,
  },
  fadilah_title: {
    color: danger,
  },
  fadilah: {
    marginTop: 5,
    marginBottom: 20,
    color: basic,
    fontStyle: "italic",
  },
});

export { styles, primary, secondary, warning, danger, basic };
