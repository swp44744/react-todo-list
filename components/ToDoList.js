/**
 * Created by Swapnil on 6/5/2016.
 */

import React, {Component} from 'react'

class ToDoList extends Component {
    render() {
        return(
          <div>This is To Do List.!
              <ul>
                  {
                      this.props.todo.map((todoItem) => {
                          return <li key={todoItem.id}>{todoItem.text}</li>
                      })
                  }
              </ul>
          </div>
        );
    }
}

export default ToDoList
