import { FC, createContext } from "react";
import{ props,contextInterface } from "./interface";


const contextValue:contextInterface={
    notes:[],
}
export const context = createContext<contextInterface | null>(null);

const Provider:FC<props> = ({children}) => {
  return <context.Provider value={contextValue}>
    {children}
  </context.Provider>;
};


export default Provider;