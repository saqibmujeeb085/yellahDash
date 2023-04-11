import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();


export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [mobileMenu, setMobileMenu] = useState(true);
  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu, screenSize, setScreenSize, mobileMenu, setMobileMenu }}>
      {children}
    </StateContext.Provider>
  );
};

const useStateContext = () => useContext(StateContext);

export default useStateContext;