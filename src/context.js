import React, { useState, useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModelOpen, setIsModelOpen] = useState(false);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModel = () => {
        setIsModelOpen(true);
    };
    const closeModel = () => {
        setIsModelOpen(false);
    };
    return (
        <AppContext.Provider value={{ isModelOpen, isSidebarOpen, openModel, openSidebar, closeModel, closeSidebar }}>
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppContext, AppProvider };
