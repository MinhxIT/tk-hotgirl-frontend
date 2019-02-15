import React, { Component } from 'react'
export default class SearchField extends Component {
  handleTextChange = event => this.props.onSearchChange(event.target.value);
  render() {
    return (
        <form className="col-3">
          <input type="text" className="form-control" placeholder="Search" onChange={this.handleTextChange}/>
        </form>
    );
  }
}
