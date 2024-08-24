import { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";
import { Modal } from "../../Componets/Modal";
import { Buttons } from "../../Componets/Buttons";

export const Main = () => {
  const { products } = useProduct();

  useEffect(() => {
    console.log("carregou")
    return () => {
      console.log("desmontou")
    }
  }, []);


  return (
    <div className="MainDiv">
      <Modal />
      <table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Edit | Del</th>
          </tr>
        </thead>
        <tbody>
          {products.map((Produto, index) => (
            <tr key={index}>
              <td>{Produto.Nome}</td>
              <td>{Produto.Descricao}</td>
              <td>R$ {Produto.Preco}</td>
              <td>{Produto.Estoque}</td>
              <td><Buttons /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};
