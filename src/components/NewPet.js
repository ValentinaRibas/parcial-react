import React from "react";
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Button } from "react-bulma-components";
import { useState } from "react";
import { addPet } from "../reducers/Service";
import { message } from 'react-message-popup'

function NewPet({ dispatch }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [description, setDescription] = useState('');
    const [characteristics, setCharacteristics] = useState([]);
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async  () => {
        const pet = {
            name,
            age,
            description,
            characteristics,
            photo
        };

        await addPet(dispatch, pet);
        message.info("Se ha agregado la mascota correctamente!");

        navigate("/")
    };

    return(
        <div data-theme="light">
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Link to={`/`}><Button className="button is-text has-text-black is-responsive">Atrás</Button></Link>
            </div>
            <form style={{ paddingTop: "10px" }}>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Nombre: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Edad: </label>
                    <select type="select" name="age" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Edad">
                                <option value="">-</option>
                                <option value="Cachorro">Cachorro</option>
                                <option value="Adulto">Adulto</option>
                                <option value="Senior">Senior</option>
                            </select>
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Descripción: </label>
                    <textarea style={{ width: "100%" }}  value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Características: </label>
                    <textarea style={{ width: "100%" }} value={characteristics} onChange={(e) => setCharacteristics(e.target.value)} placeholder="Características" />
                </div>
                <div style={{flexDirection: "row", display: "flex", padding: "20px", alignItems: "baseline"}}>
                    <label className="is-size-5 has-text-weight-bold has-text-dark" style={{ paddingRight: "10px" }}>Url de foto: </label>
                    <textarea style={{ width: "100%" }} value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="URL de foto" />
                </div>
            </form>
            <div style={{flexDirection: "row", display: "flex", padding: "20px"}}>
                <Button className="button has-text-black is-responsive" onClick={() => handleSubmit()}>Guardar</Button>
            </div>
        </div>
    );
}

export default NewPet;