import React, { Dispatch, SetStateAction, useState } from "react"

export interface IAppContext {
    data: any
    setData: Dispatch<SetStateAction<any>>
}
export const AppContext = React.createContext<IAppContext | null>(null)

interface IAppContextProvider {
    children: React.ReactNode
}
export function AppContextProvider({ children }: IAppContextProvider) {
    const [data, setData] = useState<any>()

    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    )
}
