import React from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const ModalDeleteUser = ({
  modalEliminar,
  userSeleccionado,
  eliminar,
  setModalEliminar,
}) => {
  return (
    <Modal isOpen={modalEliminar}>
      <ModalBody>
        ¿Estás seguro de eliminar al usuario{" "}
        {userSeleccionado && userSeleccionado.firstName} ?
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={() => eliminar()}>
          Si
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setModalEliminar(false)}
        >
          No
        </button>
      </ModalFooter>
    </Modal>
  );
};
export default ModalDeleteUser;
