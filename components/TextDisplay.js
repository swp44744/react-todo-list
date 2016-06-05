/**
 * Created by Swapnil on 6/5/2016.
 */
import React, {Component} from 'react'

class TextDisplay extends Component {
    render() {
        return (
          <div>
              I'm displaying text: {this.props.textFromInput}
          </div>
        );
    }
}

export default TextDisplay