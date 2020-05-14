import React from 'react'
import { deleteTask, modifyTask } from '../actions'
import { connect } from 'react-redux'
const Task = props => {

    const onClickTodelete = (id, title) => {
        props.dispatch(deleteTask(id, title))
    }

    const onClickToModify = (id, title, state) => {
        props.dispatch(modifyTask(id, title, state))
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
            <button onClick={() => onClickTodelete(props.task.id, props.task.title)}>Borrar</button> <button onClick={() => onClickToModify(props.task.id, props.task.title, props.task.state)}>Modificar</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {tasks: state.tasks}
}

export default connect(mapStateToProps)(Task)
