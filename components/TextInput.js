//This is ES6 import syntaxt
import React,{ Component} from 'react'
import TextDisplay from './TextDisplay'

//This is jsx code
class TextInput extends Component {

    constructor(props, context) {
        super(props,context)
        this.state = {
            inputText : 'initial text'
        }
    }
    deleteLetter() {
        this.setState({
            inputText: this.state.inputText.substring(0,this.state.inputText.length - 1)
        })
    }
    handleChange1(event) {
        this.setState({
            inputText: event.target.value
       })
        console.log(event.target.value)
}
    render() {
        return (
            <div>Input :
                <input
                    type="text"
                    placeholder="enter text here"
                    id="textInput_id"
                    value={this.state.inputText}
                    onChange= {this.handleChange1.bind(this)}
                />

                <br />
                <TextDisplay textFromInput={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)}/>
            </div>
            );

    }

}
export default TextInput


