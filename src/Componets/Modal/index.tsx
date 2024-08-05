import React, { useState } from "react";
import { api } from "../../API/api";
import "./Modal.css"

export const Modal = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    console.log('modal')
    setmodal(!modal);
  };
  const salvarMed = async () => {
    const payload: produtct = {
        name: name,
        desc: desc,
        price: price,
        stock: stock
    }
    await api.post("/produtos", payload)
    Modal()
  }
  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Adicionar Novo Remédio
      </button>
      {modal && (

      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={toggleModal}>
                XX
            </button>
            <h3>Digite os dados do produto</h3>
            <input type="text" id="name" name="name" placeholder="Nome do Produto" required/>
            <input type="text" id="desc" name="desc" placeholder="Descrição" required/>
            <input type="number" id="preco" name="preco" placeholder="$Preço" required/>
            <input type="number" id="stock" name="stock" placeholder="Estoque" required/>
            <button className="btnsave" onClick={salvarMed}>
                Salvar
            </button>

          </div>
        </div>
      </div>
      )}
    </>
  );
};
