import React, { createContext, useEffect, useReducer } from "react";
import { productData } from "../data/productsData";
import { getLocalCart, loadProducts } from "../utils/helpers";
import { AppReducer } from "./AppReducer";
import { AppAction } from "./AppReducer";

const initialState = {
    initialProducts: loadProducts(productData),
    cart: getLocalCart(),
    period: ""
}

interface AppContextProps {
    state: typeof initialState;
    dispatch: (action: AppAction) => void;
  }
  
  interface Props {
    children: React.ReactNode;
  }
  
  export const AppContext = createContext({} as AppContextProps);
  
  function AppContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem('products', JSON.stringify(state.initialProducts));
    }, [state.initialProducts]);
  
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
  }
  
  export default AppContextProvider;