import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'


class TaskHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.dispatch(addTodo(this.state.message))
    }

    render() {
        return (
            <div>
                <h1>Task Menu</h1>
                <input type="text" value={this.state.value}
                    onChange={(event) => { this.setState({ message: event.target.value }) }}
                    placeholder="Enter grocieries" />
                <button onClick={this.handleSubmit} >Add</button>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({addTodo},dispatch)
// }


export default connect(null)(TaskHeader)