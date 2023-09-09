"use client";

import { AppContext } from "next/app";
import React, { useState, PropsWithChildren, useContext } from "react";

interface AppContextProps {
    data: {};
}

const defaultValue: AppContextProps = {
    data: {},
};

const AppContext = React.createContext<AppContextProps>(defaultValue);

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [data, setData] = useState({});
    return <AppContext.Provider>value={{ data }}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider, AppContext };
