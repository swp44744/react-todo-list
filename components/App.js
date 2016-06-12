import React, {Component} from 'react' //So that we dont have to use React.component always.
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className = "app">
                <h1>To Do List</h1>
                <ToDoInput dispatch={this.props.dispatch} />
                <ToDoList todo={this.props.todos}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(App)

