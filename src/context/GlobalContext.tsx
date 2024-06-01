import React, { ReactNode } from 'react'
import { GET_PRODUCTS } from '../helpers/api';

interface GlobalStorageProps {
    children: ReactNode;
};

interface GlobalContextProps {
    getProducts: () => void;
}

export const GlobalContext = React.createContext<any>({} as GlobalContextProps)
export const GlobalStorage: React.FC<GlobalStorageProps> = ({ children }) => {

    async function getProducts(page: number, rows: number, sortby: string, orderby: string) {
        const { url, option } = GET_PRODUCTS({ page, rows, sortby, orderby });
        const response = await fetch(url, option);
        const json = await response.json();
        return json;
    }

    return (
        <GlobalContext.Provider value={{ getProducts }}>
            {children}
        </GlobalContext.Provider>
    )
}


