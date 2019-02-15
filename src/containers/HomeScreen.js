import React, { Component } from 'react'
import axios from './../axios';
import NavBar from './../components/NavBar';
import MainContent from './../components/MainContent';

export default class HomeScreen extends Component {
    state = {
        images:[],
        searchString:""
      }
      componentDidMount(){
        axios.get('/api/images')
        .then(data=>
          {
            this.setState({images:data.data});
          })
        .catch(err=>console.log(err))
      }
      onSearchChange = text => this.setState({searchString:text});
  render() {
    const displayedImages = this.state.images.filter(img=>
        img.title.includes(this.state.searchString)||
        img.description.includes(this.state.description)
        );
    return (
      <div>
        <NavBar
          onSearchChange = {this.onSearchChange}
          username={this.props.username}
          onLogin={this.props.onLogin}
          />
        <MainContent images= {displayedImages}/>
      </div>
    )
  }
}
