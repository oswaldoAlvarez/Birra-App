import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

const ModalEditUser = ({
  handleChange,
  userSeleccionado,
  editar,
  setModalEditar,
  modalEditar,
}) => {
  return (
    <Modal isOpen={modalEditar}>
      <ModalHeader>
        <div>
          <h3>Editar Usuario</h3>
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
            value={userSeleccionado && userSeleccionado.id}
          />
          <label>Nombre</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            value={userSeleccionado && userSeleccionado.firstName}
            onChange={handleChange}
          />
          <br />
          <label>Apellido</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            value={userSeleccionado && userSeleccionado.lastName}
            onChange={handleChange}
          />
          <br />
          <label>Edad</label>
          <input
            className="form-control"
            type="number"
            name="age"
            value={userSeleccionado && userSeleccionado.age}
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => editar()}>
          Actualizar
        </button>
        <button
          className="btn btn-danger"
          onClick={() => setModalEditar(false)}
        >
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalEditUser;
