import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SettingContext = createContext({});

export function SettingProvider({ children }) {
  const [fontArab, setFontArab] = useState("Uthmani");
  const [sizeArab, setSizeArab] = useState(35);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);
  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);

  async function getFontArab() {
    const jsonValue = await AsyncStorage.getItem("fontArab");
    const { value } = JSON.parse(jsonValue);
    return jsonValue != null ? setFontArab(value) : setFontArab("Uthmani");
  }

  async function getSizeArab() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeArab");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeArab(value) : setSizeArab(35);
    } catch (e) {}
  }

  async function getSizeTerjemah() {
    try {
      const jsonValue = await AsyncStorage.getItem("sizeTerjemah");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setSizeTerjemah(value) : setSizeTerjemah(14);
    } catch (e) {}
  }

  async function getTranslate() {
    try {
      const jsonValue = await AsyncStorage.getItem("translate");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsTranslate(value) : setIsTranslate(false);
    } catch (e) {}
  }

  async function getKubro() {
    try {
      const jsonValue = await AsyncStorage.getItem("kubro");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsKubro(value) : setIsKubro(false);
    } catch (e) {}
  }

  async function getCc() {
    try {
      const jsonValue = await AsyncStorage.getItem("cc");
      const { value } = JSON.parse(jsonValue);
      return jsonValue != null ? setIsCc(value) : setIsCc(false);
    } catch (e) {}
  }

  useEffect(() => {
    getFontArab();
    getSizeArab();
    getSizeTerjemah();
    getTranslate();
    getKubro();
    getCc();
  }, [sizeArab, sizeTerjemah, fontArab, isTranslate, isKubro, isCc]);

  return (
    <SettingContext.Provider
      value={{
        fontArab,
        setFontArab,
        sizeArab,
        setSizeArab,
        sizeTerjemah,
        setSizeTerjemah,
        isKubro,
        setIsKubro,
        isCc,
        setIsCc,
        isTranslate,
        setIsTranslate,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}
