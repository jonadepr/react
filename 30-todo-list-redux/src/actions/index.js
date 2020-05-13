import { v1 as uuid } from 'uuid'


export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const MODIFY_TASK = "MODIFY_TASK";

export const addTask = (title, description) => {
    return {
        type: ADD_TASK,
        payload: {
            id: uuid(),
            title: title,
            description: description,
            state: "Ready"
        }
    }
}


export const deleteTask = (id, title) => {
    return {
        type: DELETE_TASK,
        payload: {
            id: id,
            title: title,
        }
    }
}


export const modifyTask = (id, title, state) => {
    return {
        type: MODIFY_TASK,
        payload: {
            id: id,
            title: title,
            state: state
        }
    }
}