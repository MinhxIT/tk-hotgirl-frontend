import React, { Component } from 'react'
import SearchField from './SearchField';
import logo from '../img/TechkidBrandColor.png'
import ProfilePanel from './ProfilePanel';
export default class NavBar extends Component {
  render() {
    return (
      
    <div className="navbar">
        <div className="container">
            <SearchField
            onSearchChange={this.props.onSearchChange}/>
            <div className='col-6'>
              <img src = {logo} alt="logo" className="text-center"/>
            </div>
            <ProfilePanel username={this.props.username} onLogin = {this.props.onLogin} />
        </div>
    </div>
    )
  }
}
