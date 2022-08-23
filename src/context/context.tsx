import { FC, createContext, useState } from "react";
import { props, contextInterface } from "./interface";

export const context = createContext<contextInterface | null>(null);

const Provider: FC<props> = ({ children }) => {
  const [contextValue, setContextValue] = useState<{ notes: string[] }>({
    notes: [],
  });
  return (
    <context.Provider value={{contextValue, setContextValue}}>
      {children}
    </context.Provider>
  );
};

export default Provider;
