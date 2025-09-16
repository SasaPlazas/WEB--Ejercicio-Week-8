import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const InputContext = createContext(null);

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};
