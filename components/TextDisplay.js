/**
 * Created by Swapnil on 6/5/2016.
 */
import React, {Component} from 'react'

class TextDisplay extends Component {
    handleClick() {
       // console.log(this) 
        this.props.deleteLetter()
    }
    render() {
        return (
          <div>
              <br />
              I'm displaying text: {this.props.textFromInput}
              <br /><br /><button onClick = {this.handleClick.bind(this)}>Delete one letter</button>
          </div>
        );
    }
}

export default TextDisplay