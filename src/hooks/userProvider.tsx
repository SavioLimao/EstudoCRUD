import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../API/api";

const ProductContext = createContext({})

const ProductProvider = ({children}) => {
    const [product, setProduct] = useState([])


useEffect(() => {
    console.log('loading API')
    getProduct()
} [])

const getProduct = async () => {
    const response = await api.get('produtos')
    const productApi = response.data

    setProduct(productApi)
}

const addMed = async (payload) => {
    await api.post("produtos", payload)

    getProduct()
}

const ContextValue = {
    product,
    getProduct,
    addMed,
}

return <ProductContext.Provider value={ContextValue}>{children}</ProductContext.Provider>
}

const ProductUser = () => {
    const context = useContext(ProductContext)
    
    if (!context) {
        throw new Error("useProduto must be used within a ProductProvider");
      }
    
      return context;
    }

    export {ProductUser}