import {createContext, useState } from 'react'

export const ModelsContext = createContext();

export const ModelsContextProvider = ({children})=>{

    const [modelData, setModelData] = useState({});

    // Function to set model data
    const setModel = (modelName, data) => {
      setModelData({ ...modelData, [modelName]: data });
    };
  
    // Function to get model data
    const getModel = (modelName) => {
      return modelData[modelName] || null;
    };


    return <ModelsContext.Provider value={{ setModel, getModel }}>{children}</ModelsContext.Provider>
}