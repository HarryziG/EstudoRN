import React, {createContext, useState} from 'react';

export const ConfigContext = createContext({});

function ConfigProvider({children}) {
  const [color,setColor] = useState("#000");
  const [fontSize, setFontSize] = useState(16);

  return(
    <ConfigContext.Provider value={{color, fontSize,setColor,setFontSize}}>
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider;