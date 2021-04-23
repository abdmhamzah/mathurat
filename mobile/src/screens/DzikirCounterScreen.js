import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Vibration, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles";

export default function DzikirCounterScreen() {
  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter(counter + 1);
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
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <View style={styles.scroll_screen}>
      <TouchableOpacity onPress={addCounter} style={styles.button_dzikir}>
        <Text style={styles.count}>{counter}</Text>
      </TouchableOpacity>
      <View style={styles.dzikir_setting}>
        <TouchableOpacity
          onPress={resetCounter}
          style={styles.dzikir_setting_button}
        >
          <FontAwesome
            name="repeat"
            size={30}
            style={
              counter === 0 ? styles.home_setting_disabled : styles.home_setting
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reduceCounter}
          style={styles.dzikir_setting_button}
        >
          <FontAwesome
            name="minus"
            size={30}
            style={
              counter === 0 ? styles.home_setting_disabled : styles.home_setting
            }
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={saveCounter}
          style={styles.dzikir_setting_button}
        >
          <FontAwesome
            name="star"
            size={30}
            style={
              counter === 0 ? styles.home_setting_disabled : styles.home_setting
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
