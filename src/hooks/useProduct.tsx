import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../API/api";

type ProductProviderProps = {
    children: React.ReactNode
}

type ProductProviderType = {
    products: Product[],
    getProducts: () => Promise<void>
}

const ProductContext = createContext({} as ProductProviderType)

const ProductProvider = ({ children }: ProductProviderProps) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        try {
            const response = await api.get('produtos')
            const productAPI = response.data
            setProducts(productAPI)

        } catch (error) {
            alert('DEU PAU! 400')
        }
    }
    const contextValue: ProductProviderType = {
        products,
        getProducts,
    }

    return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
}

const useProduct = () => {
    const context = useContext(ProductContext)


    if (!context) {
        throw new Error("useProduto must be used within a ProductProvider");
    }

    return context;
}

export { useProduct, ProductProvider }