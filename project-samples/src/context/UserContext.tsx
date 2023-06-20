import { createContext, useState } from "react";

export type UserContextProviderProps = {
    children: React.ReactNode;
};

type User = {
    username: string;
    email: string;
};

type UserContextType = {
    user : User | null;
    setUser : (user : User | null) => void;
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user,setUser] = useState<User | null>(null);

    return <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>;
};
