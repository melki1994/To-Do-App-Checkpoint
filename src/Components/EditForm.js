import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../Redux/Actions/index";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
const EditForm = ({ el }) => {


  const [modalIsOpen, setIsOpen] = useState(false);
  const [newDescription, setNewDscription] = useState(el.description);
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => setNewDscription(e.target.value);
  const handleSubmit = (e) => {
    dispatch(editTask({ id: el.id, newDescription: newDescription }));
    closeModal();
  };
  return (
    <div>
      <button  style={{marginLeft:"30px"}} onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            defaultValue={el.description}
            onChange={handleChange}
          />
          <button>Confirm</button>
          <button id="del" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default EditForm;
