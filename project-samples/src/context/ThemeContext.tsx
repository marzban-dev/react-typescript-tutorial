import { createContext } from "react";
import { theme } from "./theme";

export type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
