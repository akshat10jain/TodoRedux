import React from 'react'
import {connect} from 'react-redux'
import {deleteTask} from '../../actions/index'


 class Task extends React.Component{
 
    handelDelete=(e)=>{
        e.preventDefault();
        this.props.dispatch(deleteTask(this.props.id))
    }


    render(){
        return(
            <tr>
             <td>{this.props.task}</td>
             <td>
                 <button onClick={this.handelDelete} >Delete</button>
             </td>

            </tr>
        )
    }
}



export default connect(null)(Task)