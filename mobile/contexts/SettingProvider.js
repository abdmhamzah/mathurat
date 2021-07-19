import React, { createContext, useState } from "react";

export const SettingContext = createContext({});

export function SettingProvider({ children }) {
  const [fontArab, setFontArab] = useState("Uthmani");
  const [sizeArab, setSizeArab] = useState(35);
  const [sizeTerjemah, setSizeTerjemah] = useState(14);
  const [isKubro, setIsKubro] = useState(false);
  const [isCc, setIsCc] = useState(false);
  const [isTranslate, setIsTranslate] = useState(false);
  const [isPagi, setIsPagi] = useState(true);

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
        isPagi,
        setIsPagi,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}
