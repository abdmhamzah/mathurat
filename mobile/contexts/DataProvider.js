import React, { createContext, useEffect, useState } from "react";
import {
  dataAsmaulHusna,
  dataDoaSholat,
  dataDzikir,
  dataHadist,
  dataMathuratKubroPagi,
  dataMathuratKubroSore,
  dataMathuratSughraPagi,
  dataMathuratSughraSore,
  dataMenu,
} from "../data";

export const DataContext = createContext({});

export function DataProvider({ children }) {
  const [asmaulHusna, setDataAsmaulHusna] = useState([]);
  const [doaSholat, setDataDoaSholat] = useState([]);
  const [hadist, setDataHadist] = useState([]);
  const [dzikir, setDataDzikir] = useState([]);
  const [mathuratKubroPagi, setDataMathuratKubroPagi] = useState([]);
  const [mathuratKubroSore, setDataMathuratKubroSore] = useState([]);
  const [mathuratSughraPagi, setDataMathuratSughraPagi] = useState([]);
  const [mathuratSughraSore, setDataMathuratSughraSore] = useState([]);
  const [menu, setDataMenu] = useState([]);

  useEffect(() => {
    setDataAsmaulHusna(dataAsmaulHusna);
    setDataDoaSholat(dataDoaSholat);
    setDataHadist(dataHadist);
    setDataDzikir(dataDzikir);
    setDataMathuratKubroPagi(dataMathuratKubroPagi);
    setDataMathuratKubroSore(dataMathuratKubroSore);
    setDataMathuratSughraPagi(dataMathuratSughraPagi);
    setDataMathuratSughraSore(dataMathuratSughraSore);
    setDataMenu(dataMenu);
  }, [asmaulHusna, doaSholat]);

  return (
    <DataContext.Provider
      value={{
        asmaulHusna,
        doaSholat,
        hadist,
        dzikir,
        mathuratKubroPagi,
        mathuratKubroSore,
        mathuratSughraPagi,
        mathuratSughraSore,
        menu,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
