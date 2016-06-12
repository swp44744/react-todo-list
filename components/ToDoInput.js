//This is ES6 import syntaxt
import React,{ Component} from 'react'
import actions from '../redux/actions'

//This is jsx code
class ToDoInput extends Component {

    constructor(props, context) {
        super(props,context)
        this.state = {
            inputText : ''
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
       })
        console.log(event.target.value)
}
    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatch(actions.addToDo(this.state.inputText))
        console.log('Submit button is clicked..!')
    }

    render() {
        return (
            <div>Input :
                <input
                    type="text"
                    placeholder="Type in what to do"
                    id="textInput_id"
                    value={this.state.inputText}
                    onChange= {this.handleChange.bind(this)}
                />
                <br />
                <button onClick={this.handleSubmit.bind(this)}>Submit!!</button>

            </div>
            );

    }

}
export default ToDoInput


