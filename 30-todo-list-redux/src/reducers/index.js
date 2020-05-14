
import { global } from '../tasks'

const tasks = (state = global, action) => {
    console.log(action);

    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                notifications: [...state.notifications,
                "Nueva tarea " + action.payload.title
                ]
            }

        case "DELETE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== action.payload.id),
                notifications: [...state.notifications,
                "Eliminada " + action.payload.title
                ]
            }

        case "MODIFY_TASK":
            const nuevoTasks = []
            state.tasks.forEach(
                item => {
                    if (item.id === action.payload.id) {
                        if(action.payload.state === "Doing")
                            item.state="Ready"
                            else item.state="Doing"

                    }
                    nuevoTasks.push(item)
                }
            )

            console.log("modifico a doing", nuevoTasks)

            return {
                ...state,
                tasks: nuevoTasks,
                notifications: [...state.notifications,
                "Modificada " + action.payload.title
                ]
            }
        default:
            break;
    }

    return state
}

export default tasks