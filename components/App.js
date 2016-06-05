import React, {Component} from 'react' //So that we dont have to use React.component always.
import TextInput from './TextInput'

class App extends Component {
    render() {
        return (
            <div className = "app">
                <h1>This is App component1...!!</h1>
                <TextInput/>
            </div>
        );
    }
}
export default App

