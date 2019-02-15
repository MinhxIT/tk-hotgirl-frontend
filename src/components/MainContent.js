import React, { Component } from 'react'
import GirlImages from './GirlImages';
import { Link } from 'react-router-dom';
export default class MainContent extends Component {
  render() {
    const  allImages = this.props.images.map(img=>
      <div className="col-3" key={img._id}>
        <Link to={`/images/${img._id}`}>
          <GirlImages img={img}/>
        </Link>        
      </div>)
    return (
      <div className="container mt-5">
        <div className="row">
            {allImages}
        </div>
      </div>
    )
  }
}
