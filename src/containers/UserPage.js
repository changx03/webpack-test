import React, { Component } from 'react';

export default class Users extends Component {
  state = {
    value: '',
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <input
          id="user-name"
          type="text"
          value={this.state.value}
          onChange={this._onChange}
        />
      </div>
    );
  }

  _onChange = async e => {
    await this.setState({
      value: e.target.value,
    });

    console.log(this.state.value);
  };
}
