const initialState = {
    pets: [],
    showPetModal: false,
    petToUpdate: null,
};

const actionsTypes = {
    SET_PETS: 'SET_PETS',
    ADD_PET: 'ADD_PET',
    DELETE_PET: 'DELETE_PET',
    EDIT_PET: 'EDIT_PET',
    UPDATE_SHOW_PET_MODAL: 'UPDATE_SHOW_PET_MODAL',
    SET_PET_TO_UPDATE: 'SET_PET_TO_UPDATE'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionsTypes.SET_PETS
        :
            return {
                ...state,
                pets: action.payload
            };
        case actionsTypes.ADD_PET:
            return {
                ...state,
                pets: [...state.pets, action.payload]
            };
        case actionsTypes.DELETE_PET:
            return {
                ...state,
                pets: state.pets.filter(pet => pet.id !== action.payload.id)
            };
        case actionsTypes.EDIT_PET:
            return {
                ...state,
                pets: state.pets.filter(pet => pet.id !== action.payload.id)
            };
        case actionsTypes.UPDATE_SHOW_PET_MODAL:
            return {
                ...state,
                showPetModal: action.payload
            };
        case actionsTypes.SET_PET_TO_UPDATE:
            return {
                ...state,
                petToUpdate: action.payload
            };
        default:
            return state;
    }
};

export { initialState, actionsTypes, reducer };