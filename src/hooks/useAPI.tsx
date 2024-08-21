import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../API/api";

const ApiContext = createContext({})

const APIProvider = ({children}) => {
    const [product, setproduct] = useState([])

    useEffect (() => {
        getAPI()
    }, [])

    const getAPI = async () => {
        try {
                const response = await api.get('produtos')
                const productAPI = response.data
                setproduct(productAPI)
            
        } catch (error) {
            alert('DEU PAU! 400')
        }
    }
    const contextValue = {
        product,
        getAPI,
    }

    return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
}

const ApiUser = () => {
    const context = useContext(ApiContext)


if (!context) {
    throw new Error("useProduto must be used within a ProductProvider");
  }

  return context;
}

export {ApiUser}