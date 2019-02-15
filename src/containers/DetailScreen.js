import React, { Component } from 'react';
import axios from './../axios';
import NavBar from '../components/NavBar';
import GirlImages from '../components/GirlImages';

class DetailScreen extends Component {
    state = {
        
      }
      componentDidMount(){
        axios.get(`/api/images/${this.props.match.params.idImages}`)
        .then(data=>
          {
            this.setState({
              image:data.data
            });
          })
        .catch(err=>console.log(err))
      }
    render() {
        return (
            <div>
                <NavBar
                    onSearchChange = {this.onSearchChange}
                    username={this.state.username}
                    onLogin={this.onLogin}
                />
                <div className="main_content container">
                  <div className="row">
                    <div className="col-8 mr-auto ml-auto">
                      {this.state.image ? <GirlImages img={this.state.image} />:""}
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default DetailScreen;