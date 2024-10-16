import React from "react";
import 'bulma/css/bulma.min.css';
import { Link } from "react-router-dom";
import { Button } from 'react-bulma-components';
import { useEffect, useState } from "react";
import { fetchPets } from '../reducers/Service';

function Home({state, dispatch}) {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        fetchPets(dispatch);
        console.log(state)
    }, []);

    useEffect(() => {
        function renderPets() {
            console.log(state)
            const petElements = state.pets.map(pet => (
                <div className="column is-one-third" key={pet.id} style={{ display: "grid" }}>
                    <figure className="image is-square">
                        <img src={pet.photo} />
                    </figure>
                    <p className="subtitle is-6">Nombre: {pet.name}</p>
                    <p className="subtitle is-6">Edad: {pet.age}</p>
                    <Link to={`/pet/${pet.id}`} style={{ display: "grid" }}><Button className="button has-text-black">Ver detalles</Button></Link>
                </div>
            ));
            setColumns(petElements);
        }

        renderPets();
    }, [state.pets]);

    return(
        <div data-theme="light" style={{display: "flex", flexDirection: "column"}} >
            <div style={{padding: "30px"}}>
                <p className="title">
                    Adopción de mascotas
                </p>
            </div>
            <div style={{flexDirection: "row-reverse", display: "flex", padding: "30px"}}>
                <Link to={`/create`} ><Button className="button has-text-black is-responsive">Agregar mascota para adopción</Button></Link>
            </div>
            <div class="table-container">
                <div className="columns" style={{padding: "20px"}}>
                    {columns}
                </div>
            </div>
        </div>
    );
}

export default Home;