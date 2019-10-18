import React from "react";

class TodoItem extends React.Component {

    // 子组件若果想和父组件通信，要调用父组件传递过来的参数

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.delete(this.props.index);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.handleDelete.bind(this)}>{content}</div>
        )
    }
}

export default TodoItem;