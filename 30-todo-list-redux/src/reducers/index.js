
import { global } from '../reduxInitiaState'
import { DELETE_TASK, MODIFY_TASK, TASK_ADD_SUCCEED, TASK_FETCH_SUCCEED } from '../actions'

const tasks = (state = global, action) => {
    console.log(action);

    switch (action.type) {
        case TASK_ADD_SUCCEED:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                notifications: [...state.notifications,
                "Nueva tarea: " + action.payload.title
                ]
            }

        case TASK_FETCH_SUCCEED:
            return {
                ...state,
                tasks: action.payload.tasks
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== action.payload.id),
                notifications: [...state.notifications,
                "Eliminada: " + action.payload.title
                ]
            }

        case MODIFY_TASK:
            const nuevoTasks = []
            state.tasks.forEach(
                item => {
                    if (item.id === action.payload.id) {
                        if (action.payload.state === "Doing")
                            item.state = "Ready"
                        else item.state = "Doing"

                    }
                    nuevoTasks.push(item)
                }
            )

            const locontrario = (dr) => {
                if (dr === "Ready")
                    return "Doing"
                else return "Ready"
            }

            return {
                ...state,
                tasks: nuevoTasks,
                notifications: [...state.notifications,
                "Modificada: " + action.payload.title + " a " + locontrario(action.payload.state)
                ]
            }
        default:
            break;
    }

    return state
}

export default tasks