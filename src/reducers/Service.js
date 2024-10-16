import { actionsTypes } from "./Reducers";

const apiUrl = 'http://localhost:3005/api/pets';

const fetchPets = async ( dispatch ) => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.SET_PETS,
        payload: data
    });
};

const deletePet = async ( dispatch, petId ) => {
    const response = await fetch(apiUrl + `/${petId}`, {
        method: 'DELETE'
    });
    if(response.ok){
        dispatch({
            type: actionsTypes.DELETE_PET,
            payload: {id: petId}
        });
    }
};

const addPet = async ( dispatch, pet ) => {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.ADD_PET,
        payload: data
    });
};

const editPet = async ( dispatch, pet ) => {
    const response = await fetch(apiUrl + `/${pet.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    });
    const data = await response.json();
    console.log(data);
    dispatch({
        type: actionsTypes.EDIT_PET,
        payload: data
    });
};

export { fetchPets, deletePet, addPet, editPet };