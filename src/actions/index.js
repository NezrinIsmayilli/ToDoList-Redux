export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const CLEAN_ONE = "CLEAN_ONE";
export const CLEAN_ALL = "CLEAN_ALL";

export const add = (text) =>{
    return {type: 'ADD', payload: text}
};

export const toggle = (id) =>{
    return {type: 'TOGGLE', payload: id}
};

export const cleanOne = () =>{
    return {type: 'CLEAN_ONE'}
};

export const cleanAll = () =>{
    return {type: 'CLEAN_ALL'}
};