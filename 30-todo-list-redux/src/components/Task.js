import React from 'react'
import { deleteTask, modifyTask } from '../actions'
import { connect } from 'react-redux'
const Task = props => {

    const onClickTodelete = (task) => {
        props.dispatch(deleteTask(task)) //pasar el item entero
    }

    const onClickToModify = (task) => { // psar el item entero
        props.dispatch(modifyTask(task))
    }

    return (
        <div className="task"

            style={{ border: "1px solid blue" }}>
            <div  className="task-header">
                {props.task.title}
            </div>
            <p>
                {props.task.description}
            </p>
            <p  >
                {props.task.state}
            </p>
            <button onClick={() => onClickTodelete(props.task)}>Borrar</button> 
            <button onClick={() => onClickToModify(props.task)}>Modificar</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {tasks: state.tasks}
}

export default connect(mapStateToProps)(Task)
