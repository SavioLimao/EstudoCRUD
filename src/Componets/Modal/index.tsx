import React, { useState } from "react";
import { api } from "../../API/api";
import "./Modal.css"

export const Modal = ({ children }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [modal, setmodal] = useState(false);

  const toggleModal = () => {
    console.log('modal')
    setmodal(!modal);
  };
  return (
    <>
      <button className="btn-modal" onClick={toggleModal}>
        Adicionar Novo Remédio
      </button>
      {modal && (

      <div className="modal">
        <div className="overlay">
          <div className="modal-content">
            <h3>Modal</h3>

            <button className="close-modal" onClick={toggleModal}>
                X
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  );
};
