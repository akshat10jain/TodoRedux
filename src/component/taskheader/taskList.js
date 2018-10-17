import React from 'react'
import { connect } from 'react-redux'
import { deleteTask } from '../../actions/index'

class TaskList extends React.Component {

    handelDelete = (id) => {
        this.props.dispatch(deleteTask(id))
    }

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Remove</th>
                    </tr>

                </thead>
                <tbody>
                    {this.props.tasks.map((task, index) => {
                        return (
                            <tr key={task.id}>
                                <td>{task.text}</td>
                                <td>
                                    <button onClick={(event) => { this.handelDelete(task.id) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)