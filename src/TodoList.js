import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        "learn react",
        "learn english",
        "learn vue"
      ]
    }
  }

  handleBtnClick() {
    this.state.list.push("hello word")
  }

  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;