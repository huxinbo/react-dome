import React from 'react';
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ""
    }

    this.handleInputOnChange = this.handleInputOnChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  // 父组件通过属性的形式向子组件传递参数
  // 父组件通过props接受父组件传递过来的参数

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            delete={this.handleDelete}
            content={item}
            index={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputOnChange} />
          <button onClick={this.handleBtnClick} > add</button>
        </div>
        <ul className="table">{this.getTodoItems()}</ul>
      </div >

    )

  }
}

export default TodoList;