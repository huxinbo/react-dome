import React from 'react';

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    }
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }

  handleInputOnChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemClick(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputOnChange.bind(this)} />
          <button onClick={this.handleBtnClick.bind(this)} > add</button>
        </div>
        <ul className="table">
          {
            this.state.list.map((item, index) => {
              return <li>{item} <button value={index} onClick={this.handleItemClick.bind(this)}>删除</button></li>
            })
          }
        </ul>
      </div >

    )

  }
}

export default TodoList;