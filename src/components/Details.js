import React, { useState } from "react";
import 'bulma/css/bulma.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import { message } from 'react-message-popup';
import { deletePet, editPet } from "../reducers/Service";

function Details({ state, dispatch }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const pet = state.pets.find((p) => p.id === id);
    console.log(state)
    const [isEditing, setIsEditing] = useState(false);
    const [editedPet, setEditedPet] = useState({ ...pet });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedPet({ ...editedPet, [name]: value });
    };

    const handleSaveClick = () => {
        editPet(dispatch, editedPet);
        setIsEditing(false);
        message.info("Los cambios han sido guardados!");
    };

    const handleAdopt = (id) => {
        deletePet(dispatch, id);
        message.info("Se ha completado la adopción correctamente!");

        navigate("/")
    }

    return(
        <div data-theme="light">
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Link to={`/`}><Button className="button">Atrás</Button></Link>
            </div>
            <div  style={{ paddingTop: "10px" }}>
                <figure className="image is-160x160">
                    <img src={pet.photo} />
                </figure>
                {isEditing ? (
                    <>
                        <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                            <label>Nombre:</label>
                            <input type="text" name="name" value={editedPet.name} onChange={handleChange} />
                        </div>
                        <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                            <label>Edad:</label>
                            <select type="select" name="age" value={editedPet.age} onChange={handleChange}>
                                <option value="">-</option>
                                <option value="Cachorro">Cachorro</option>
                                <option value="Adulto">Adulto</option>
                                <option value="Senior">Senior</option>
                            </select>
                        </div>
                        <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                            <label>Descripción:</label>
                            <textarea style={{ width: "100%" }} name="description" value={editedPet.description} onChange={handleChange} />
                        </div>
                        <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                            <label>Características:</label>
                            <textarea style={{ width: "100%" }} name="characteristics" value={editedPet.characteristics} onChange={handleChange} />
                        </div>
                        <Button className="button has-text-black" onClick={handleSaveClick}>Guardar</Button>
                    </>
                ) : (
                    <>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Nombre: </p>
                    <p className="is-size-6 has-text-dark">{ editedPet.name }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Edad: </p>
                    <p className="is-size-6 has-text-dark">{ editedPet.age }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Descripción: </p>
                    <p className="is-size-6 has-text-dark">{ editedPet.description }</p>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <p className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Características: </p>
                    <p className="is-size-6 has-text-dark">{ editedPet.characteristics }</p>
                </div>
                <Button className="button has-text-black" onClick={() => handleEditClick()}>Editar</Button>
                <Button className="button has-text-black" onClick={() => handleAdopt(pet.id)}>Adoptar</Button>
            </>
            )}
            </div>
        </div>
    );
}

export default Details;