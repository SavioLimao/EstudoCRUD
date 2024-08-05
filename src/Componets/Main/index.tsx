import { useEffect, useState } from "react";
import { Buttons } from "../Buttons";
import { api } from "../../API/api";
import { PlusButton } from "../PlusButton";

export const Main = () => {
  const [Produtos, setProdutos] = useState([]);
  useEffect(() => {
    getPosts()
  }, []);

  const getPosts = async () => {
    try {
      const responseAxios = await api.get("/produtos");
      const produtoApi = responseAxios.data;
      setProdutos(produtoApi)
    } catch (error) {
      alert("deu pau");
    }
  };

  // const AddProduct = () => {
  //   const NewProduct = {
  //     id: Produtos.length + 1,
  //     Nome: "Novo",
  //     Descricao: "Nova Descrição",
  //     Preco: 0.0,
  //     Estoque: 0,
  //   };
  // };

  
  return (
    <div className="MainDiv">
      <table>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Estoque</th>
          <th>Edit | Del</th>
        </tr>
        <tr>
          <th>
            <input type="text" placeholder="Novo Produto" />
            <PlusButton />
          </th>
        </tr>
        <tbody>
          {Produtos.map((Produto, index) => (
            <tr key={index}>
              <td>{Produto.Nome}</td>
              <td>{Produto.Descricao}</td>
              <td>R$ {Produto.Preco}</td>
              <td>{Produto.Estoque}</td>
              <Buttons />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};
