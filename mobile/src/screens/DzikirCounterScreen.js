import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, Alert, FlatList } from "react-native";
import * as Haptics from "expo-haptics";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { dataDzikir } from "../data/dataDzikir";
import { DzikirCard } from "../components";
import { styles } from "../styles";

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
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getCounter();
  }, []);

  return (
    <View style={styles.scroll_screen}>
      <View style={styles.slider_container}>
        <FlatList
          data={dataDzikir}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DzikirCard arab={item.arab} terjemah={item.terjemah} />
          )}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          contentInsetAdjustmentBehavior="never"
          snapToAlignment="center"
          decelerationRate="fast"
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={1}
        />
      </View>
      <View style={styles.dzikir_container}>
        <TouchableOpacity onPress={addCounter} style={styles.button_dzikir}>
          <Text style={styles.count}>{counter}</Text>
        </TouchableOpacity>
      </View>
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
