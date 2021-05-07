import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Alert, FlatList } from "react-native";
import * as Haptics from "expo-haptics";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataDzikir } from "../data/dataDzikir";
import { DzikirCard } from "../components";
import { COLOR, SIZES } from "../styles";

export default function DzikirCounterScreen() {
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
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FlatList
        data={dataDzikir}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DzikirCard arab={item.arab} terjemah={item.terjemah} />
        )}
        contentContainerStyle={{ marginTop: SIZES.padding * 2 }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentInsetAdjustmentBehavior="never"
        snapToAlignment="center"
        decelerationRate="fast"
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={1}
      />
      <TouchableOpacity
        onPress={addCounter}
        style={{
          height: SIZES.height / 2.4,
          width: SIZES.height / 2.4,
          borderRadius: SIZES.height / 3,
          backgroundColor: COLOR.primary,
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.padding * 3,
        }}
      >
        <Text style={{ fontSize: 100, color: COLOR.warning }}>{counter}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding * 3,
          marginHorizontal: SIZES.padding,
        }}
      >
        <TouchableOpacity
          onPress={resetCounter}
          style={{
            flex: 1,
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding * 2,
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
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding * 2,
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
            marginHorizontal: SIZES.padding,
            backgroundColor: COLOR.primary,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: SIZES.base,
            paddingVertical: SIZES.padding * 2,
          }}
        >
          <FontAwesome
            name="star"
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
