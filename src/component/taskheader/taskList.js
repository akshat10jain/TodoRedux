import React from 'react'
import { connect } from 'react-redux'
import Task from './task'

class TaskList extends React.Component{
    render(){
        console.log('task ',this.props.tasks)
        return(
            <table>
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                
                    {Array.from(Object.keys(this.props.tasks), k=>this.props.tasks[k]).map((task,index)=><Task key={index} task={task} />)}
                    {/* {this.props.tasks.map((task,index)=><Task key={index} task={task} />)} */}
                </tbody>
                </table>
        )
    }
}

function mapStateToProps(state){
    return{
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)