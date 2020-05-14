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

export const addTask = (title, description)  => {
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


/* 
export const deleteTaskSucceed = (task) => {
    return {
        type: DELETE_TASK,
        payload: task
    }
}
 */

export const deleteTask = (id, title) => {
    return dispatch => {
        axios.delete("http://localhost:4000/tasks/"+id).then(
            
            
            res => {
                console.log("resdata",res)
                dispatch(fetchTasks())
            }
            )
    }
}



export const modifyTask = (id, title, state, description) => {
    const updater =     {
        "id": id,
        "title": title,
        "description": description,
        "state": state==="Ready"?"Doing":"Ready"
      }
    return dispatch => {
        axios.put("http://localhost:4000/tasks/"+id, updater).then(
            res => {
                console.log("resdata",res)
                dispatch(fetchTasks())
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