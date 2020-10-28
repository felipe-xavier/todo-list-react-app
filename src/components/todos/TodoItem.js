import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  getStyle = () => {
    return {
      // backgroundColor: '#4f4f4f',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

  btnStyle = () => {
    return {
      backgroundColor: 'red',
      border: 'none',
      float: 'right',
      padding: '5px 10px'
    }
  }

  render() {
    const {title, id} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <div>
          <span style={this.linkStyle()}
            onClick={this.props.markComplete.bind(this, id)}>
              {title}
          </span>
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={this.btnStyle()}>
              x
          </button>
        </div>
      </div>
    );
  }

  linkStyle = () => {
    return {
      cursor: 'pointer'
    };
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
