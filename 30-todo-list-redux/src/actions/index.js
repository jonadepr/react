import axios from 'axios';

export const TASK_ADD_SUCCEED = "ADD_TASK";
export const TASK_FETCH_SUCCEED = "FETCH_TASKS_SUCCEED"
export const DELETE_TASK = "DELETE_TASK";
export const MODIFY_TASK = "MODIFY_TASK";


export const addTaskSucceed = (task) => {
    return {
        type: TASK_ADD_SUCCEED,
        payload: task
    }
}

export const addTask = (title, description) => {
    return dispatch => {
        axios.post("http://localhost:4000/tasks", {
            title,
            description,
            state: "Ready"
        }).then(
            res => dispatch(addTaskSucceed(res.data))
        )
    }
}

 
export const deleteTaskSucceed = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}



 
export const modifyTaskSucceed = (task) => {
    return {
        type: MODIFY_TASK,
        payload: task
    }
}


export const deleteTask = (task) => { // pasar la task
    return dispatch => {
        axios.delete("http://localhost:4000/tasks/" + task.id).then(
            res => {

                dispatch(deleteTaskSucceed(task))// llamar a deletetaskSucced
            }
        )
    }
}



export const modifyTask = (task) => { // pasar la task
    const updater = {
        "id": task.id,
        "title": task.title,
        "description": task.description,
        "state": task.state === "Ready" ? "Doing" : "Ready"
    }
    return dispatch => {
        axios.put("http://localhost:4000/tasks/" + task.id, updater).then(
            res => {
                console.log("resdata", res)
                dispatch(modifyTaskSucceed(task)) // llamar a deletetaskSucced
            }
        )
    }
}


export const fetchTaskSucceed = tasks => {
    return {
        type: TASK_FETCH_SUCCEED,
        payload: {
            tasks: tasks
        }
    }
}

export const fetchTasks = () => {
    return dispatch => {
        axios.get("http://localhost:4000/tasks").then(
            res => {
                dispatch(fetchTaskSucceed(res.data))
            }
        )
    }
}