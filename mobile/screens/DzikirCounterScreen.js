import React, { useEffect, useState, useRef, useContext } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carousel from "react-native-snap-carousel";
import { FontAwesome } from "@expo/vector-icons";
import { DataContext } from "../contexts/DataProvider";
import { DzikirCard } from "../components";
import { COLOR, SIZES } from "../styles";

export default function DzikirCounterScreen() {
  const carouselRef = useRef("");
  const { dzikir } = useContext(DataContext);
  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter(counter + 1);
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
  }

  function resetCounter() {
    if (counter !== 0) {
      Alert.alert("Mulai Dari Nol", "Anda yakin mulai lagi dari nol?", [
        {
          text: "Tidak",
          style: "cancel",
        },
        {
          text: "Ya",
          onPress: () => {
            setCounter(0);
            AsyncStorage.removeItem("dzikir");
          },
        },
      ]);
    }
  }

  function reduceCounter() {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  }

  function saveCounter() {
    if (counter !== 0) {
      Alert.alert(
        "Simpan Data Dzikir",
        "Simpan data dzikir anda untuk dilanjutkan di waktu lain?",
        [
          {
            text: "Tidak",
            style: "cancel",
          },
          {
            text: "Ya",
            onPress: () => {
              const jsonValue = JSON.stringify({ value: counter });
              AsyncStorage.setItem("dzikir", jsonValue);
            },
          },
        ]
      );
    }
  }

  async function getCounter() {
    try {
      const jsonValue = await AsyncStorage.getItem("dzikir");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setCounter(value) : setCounter(0);
    } catch (e) {}
  }

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <View style={{ alignItems: "center" }}>
      <Carousel
        ref={carouselRef}
        data={dzikir}
        sliderWidth={SIZES.width}
        itemWidth={(SIZES.width * 2) / 3}
        layout={"stack"}
        layoutCardOffset={18}
        containerCustomStyle={{
          marginTop: SIZES.padding * 2,
          height: (SIZES.height * 2) / 7,
        }}
        renderItem={({ item }) => (
          <DzikirCard
            arab={item.arab}
            translate={item.terjemah}
            transliterasi={item.transliterasi}
          />
        )}
      />
      <TouchableOpacity
        onPress={addCounter}
        style={{
          height: SIZES.width - SIZES.padding * 8,
          width: SIZES.width - SIZES.padding * 8,
          borderRadius: SIZES.height / 3,
          backgroundColor: COLOR.primary,
          alignItems: "center",
          justifyContent: "center",
          // marginTop: SIZES.padding * 4,
        }}
      >
        <Text style={{ fontSize: 100, color: COLOR.warning }}>{counter}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: SIZES.padding * 3,
          marginHorizontal: SIZES.padding,
        }}
      >
        <TouchableOpacity
          onPress={resetCounter}
          style={{
            flex: 1,
            height: 50,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding,
          }}
        >
          <FontAwesome
            name="repeat"
            size={30}
            style={
              counter === 0
                ? { color: COLOR.secondary }
                : { color: COLOR.danger }
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reduceCounter}
          style={{
            flex: 1,
            height: 50,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding,
          }}
        >
          <FontAwesome
            name="minus"
            size={30}
            style={
              counter === 0
                ? { color: COLOR.secondary }
                : { color: COLOR.danger }
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={saveCounter}
          style={{
            flex: 1,
            height: 50,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding,
          }}
        >
          <FontAwesome
            name="bookmark"
            size={30}
            style={
              counter === 0
                ? { color: COLOR.secondary }
                : { color: COLOR.danger }
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
