import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const ModalInsertUser = ({
  handleChange,
  insertar,
  setModalInsertar,
  userSeleccionado,
  modalInsertar,
  users,
}) => {
  return (
    <Modal isOpen={modalInsertar}>
      <ModalHeader>
        <div>
          <h3>Insertar Usario</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>ID</label>
          <input
            className="form-control"
            readOnly
            type="text"
            name="id"
            value={users[users.length - 1].id + 1}
          />
          <br />
          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={userSeleccionado ? userSeleccionado.firstName : ""}
            onChange={handleChange}
          />
          <label>Apellido</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={userSeleccionado ? userSeleccionado.lastName : ""}
            onChange={handleChange}
          />
          <label>Edad</label>
          <input
            className="form-control"
            type="number"
            name="age"
            value={userSeleccionado ? userSeleccionado.age : ""}
            onChange={handleChange}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => insertar()}>
          Insertar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setModalInsertar(false)}
        >
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalInsertUser;
