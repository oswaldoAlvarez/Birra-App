import React, { useState } from "react";
import ModalInsertUser from "./ModalInsertUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ModalEditUser from "./ModalEditUser";

import "../../styles/BirraApp/BirraUser.scss";

const BirraUsers = ({ users, setUsers }) => {
  const [modalEditar, setModalEditar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [userSeleccionado, setUserSeleccionado] = useState({
    id: "",
    firstName: "",
    lastName: "",
    age: "",
  });

  const seleccionarUsuario = (usuario, caso) => {
    setUserSeleccionado(usuario);
    caso === "Editar" ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    let usersNuevo = users;
    usersNuevo.map((usuario) => {
      if (usuario.id === userSeleccionado.id) {
        usuario.firstName = userSeleccionado.firstName;
        usuario.lastName = userSeleccionado.lastName;
        usuario.age = userSeleccionado.age;
      }
    });
    setUsers(usersNuevo);
    setModalEditar(false);
  };

  const eliminar = () => {
    setUsers(users.filter((usuario) => usuario.id !== userSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setUserSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    let valorInsertar = userSeleccionado;
    valorInsertar.id = users[users.length - 1].id + 1;
    let userNuevo = users;
    userNuevo.push(valorInsertar);
    setUsers(userNuevo);
    setModalInsertar(false);
  };

  return (
    <div className="tablaForm">
      <button
        className="btn btn-success mt-3"
        onClick={() => abrirModalInsertar()}
      >
        Inscribirse en la MeetUp
      </button>
      <br />
      <br />
      <table className="tablaForm__container">
        <thead className="tablaForm__header">
          <tr className="tablaForm__header-container">
            <th className="tablaForm__header-container-title">ID</th>
            <th className="tablaForm__header-container-title">Nombre</th>
            <th className="tablaForm__header-container-title">Apellido</th>
            <th className="tablaForm__header-container-title">Edad</th>
            <th className="tablaForm__header-container-title">Opciones</th>
          </tr>
        </thead>
        <tbody className="tablaForm__body">
          {users.map((element) => (
            <tr className="tablaForm__body-container">
              <td className="tablaForm__body-container-content">
                {element.id}
              </td>
              <td className="tablaForm__body-container-content">
                {element.firstName}
              </td>
              <td className="tablaForm__body-container-content">
                {element.lastName}
              </td>
              <td className="tablaForm__body-container-content">
                {element.age}
              </td>
              <td className="tablaForm__body-container-content">
                <button
                  className="btn btn-primary mr-1 mb-1 mt-1"
                  onClick={() => seleccionarUsuario(element, "Editar")}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger mr-1 mb-1 mt-1"
                  onClick={() => seleccionarUsuario(element, "Eliminar")}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEditUser
        handleChange={handleChange}
        userSeleccionado={userSeleccionado}
        editar={editar}
        setModalEditar={setModalEditar}
        modalEditar={modalEditar}
      />
      <ModalDeleteUser
        modalEliminar={modalEliminar}
        userSeleccionado={userSeleccionado}
        eliminar={eliminar}
        setModalEliminar={setModalEliminar}
      />
      <ModalInsertUser
        handleChange={handleChange}
        insertar={insertar}
        setModalInsertar={setModalInsertar}
        userSeleccionado={userSeleccionado}
        users={users}
        modalInsertar={modalInsertar}
      />
    </div>
  );
};
export default BirraUsers;
