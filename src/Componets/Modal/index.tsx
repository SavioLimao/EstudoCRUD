import React, { useState } from "react";
import { api } from "../../API/api";
import "./Modal.css"

export const Modal = ({ props }) => {
  const [Nome, setName] = useState("");
  const [Descricao, setDesc] = useState("");
  const [Preco, setPrice] = useState("");
  const [Estoque, setStock] = useState("");

  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    if (!Nome=="" || !Descricao=="" || !Preco=="" ||  !Estoque=="")  {
      const AlertX = confirm("Se você fechar perderá TUDO!")
      if (!AlertX) return
    }
    setmodal(!modal);
    setName("")
    setDesc("")
    setPrice("")
    setStock("")

  };
  const salvarMed = async () => {
    const payload: product = {
      Nome: Nome,
      Descricao: Descricao,
      Preco: parseFloat(Preco),
      Estoque: parseInt(Estoque)
    }
    console.log(payload)
    await api.post("/produtos", payload)
    props()
    toggleModal()
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
                X
            </button>
            <h3>Digite os dados do produto</h3>
            <input type="text" id="name" name="name" placeholder="Nome do Produto" required
            // ISSO
            onChange={(e) => setName(e.target.value)}/>

            <input type="text" id="desc" name="desc" placeholder="Descrição" required
            onChange={(e) => setDesc(e.target.value)}/>

            <input type="number" id="preco" name="preco" placeholder="$Preço" required
            onChange={(e) => setPrice(e.target.value)}/>
            
            <input type="number" id="stock" name="stock" placeholder="Estoque" required
            onChange={(e) => setStock(e.target.value)}/>

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
