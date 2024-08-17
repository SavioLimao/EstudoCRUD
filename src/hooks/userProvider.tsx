import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../API/api";

const ProductProvider = createContext({children} => {
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

const addMed = async (payload: Product) => {
    await new Promise
}

})