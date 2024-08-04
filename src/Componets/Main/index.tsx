import { useEffect, useState } from "react";
import { Buttons } from "../Bottons";
import { api } from "../../API/api";


const Main = () => {
  const [Produtos, setProdutos] = useState([
    
  ]);

  const AddProduct = () => {
    const NewProduct = {
      id: Produtos.length + 1,
      Nome: "Novo",
      Descricao: "Nova Descrição",
      Preco: 0.0,
      Estoque: 0,
    };
    setProdutos([...Produtos, NewProduct]);
  };

  const getPosts = async () => {
    try {
      
      const response = await axios.get()
      
    } catch (error) {
      alert('deu')
    }
  }

  useEffect(() => {

  }, [])
  return (
    <div className="MainDiv">
      <table>
        <tr>
          <th>Produto</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Estoque</th>
          <th>Add | Edit | Del</th>
        </tr>
        <tr>
          <th>
            <input type="text" placeholder="Novo Produto" />
          </th>
        </tr>
        <tbody>
          {Produtos.map((Produto) => (
            <tr>
              <td>{Produto.Nome}</td>
              <td>{Produto.Descricao}</td>
              <td>R$ {Produto.Preco}</td>
              <td>{Produto.Estoque}</td>
              <Buttons AddProduct={AddProduct} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
