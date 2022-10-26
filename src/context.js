import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) =>{
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [value, setValue] = useState(0);

    const resize = ()=> {
        setScreenWidth(window.innerWidth);
    }

    useEffect(()=>{
        window.addEventListener("resize", resize);

        resize();
    },[]);

    return(
        <AppContext.Provider value={{
            screenWidth, value, setValue, resize
        }}>
            {children}
        </AppContext.Provider>
    );
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}