import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    const {title} = this.state;
    e.preventDefault();
    if (title) {
      this.props.addTodo(title);
      this.setState({title: ''});
    }
  }

  render() {
    return (
      <form style={{display: 'flex', padding: '5px'}} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Add Todo..."
          style={{flex: '10', padding: '5px'}}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          style={{flex: '1'}}
        />
      </form>
    );
  }
}

AddTodo.propTypes = {};

export default AddTodo;
