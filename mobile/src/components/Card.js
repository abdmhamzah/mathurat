import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

const windowWidth = Dimensions.get("window").width;

export default function Card(props) {
  let [fontsLoaded] = useFonts({
    lateef: require("../fonts/Lateef-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.pengulangan}>Dibaca {props.pengulangan}x</Text>
        <Text style={styles.judul}>{props.judul}</Text>
      </View>
      <Text style={styles.arabic}>{props.arab}</Text>
      <Text style={styles.terjemah}>{props.terjemah}</Text>
      {/* <Text style={styles.fadilah_title}>Fadhillah</Text>
      <Text style={styles.fadilah}>Isi Fadhilah</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#312c51",
    borderRadius: 8,
    borderColor: 'grey',
    borderWidth: 0.2,
    marginBottom: 15,
    width: windowWidth - 40,
    shadowColor: 'grey',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth - 70,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  judul: {
    flex: 1,
    textAlign: "right",
    fontSize: 18,
    color: "#f0c38e",
  },
  pengulangan: {
    flex: 1,
    fontSize: 18,
    color: "#f0c38e",
  },
  arabic: {
    fontFamily: "lateef",
    fontSize: 30,
    color: "white",
    fontWeight: "400",
    marginVertical: 20,
    paddingHorizontal: 25,
    textAlign: "center",
  },
  terjemah: {
    marginVertical: 20,
    color: "white",
    paddingHorizontal: 25,
    textAlign: "center",
  },
  fadilah_title: {
    // marginVertical: 20,
    color: 'white'
  },
  fadilah: {
    marginTop: 5,
    marginBottom: 20,
    color: 'white',
    fontStyle: 'italic'
  }
});
