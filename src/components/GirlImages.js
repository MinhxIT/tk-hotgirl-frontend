import React, { Component } from 'react'
import config from '../config';
export default class GirlImages extends Component {
  render() {
    const comments =this.props.img.comment ? this.props.img.comment.map(comment=>
      <p>
        <span 
          className="font-weight-bold">
          {comment.createdBy.username}
        </span>: {" "}
        {comment.content}
      </p>
    ):""
    console.log({comments});
    return (
      
      <div className="card-deck">
          <div className="card">
              <img className="card-img-top" src={config.rootPath + this.props.img.imageUrl} alt={this.props.img.title}/>
              <div className="card-body">
                  <h5 className="card-title">{this.props.img.title}</h5>
                  <p className="card-text">{this.props.img.description}</p>
                  {comments}
              </div>
          </div>
      </div>
    )
  }
}
