import React, {Component} from 'react' //So that we dont have to use React.component always.
import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class App extends Component {
    render() {
        return (
            <div className = "app">
                <h1>To Do List</h1>
                <ToDoInput/>
                <ToDoList/>
            </div>
        );
    }
}
export default App

