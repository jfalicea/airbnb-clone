import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Abode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faStar)
class Abode extends Component {
  render() {
    console.log('ABODES.js', this.props.abode )
    return(
        <div className="col s12 waypoint">
            <Link to={`/abode/${this.props.abode.id}`}>
                <div className="large-pic">
                    <img src={`${window.apiHost}${this.props.abode.imageURL}`} />
                </div>
                <div className="info">
                    <div className="listing-details">PRIVATE ROOM · CANICATTÌ</div>
                    <div className="title">House in countryside (30 km dal mare)</div>
                    <div className="price">$61 per night</div>
                    <div className="reviews">
                        <span className="stars"><FontAwesomeIcon icon="star" size="1x"/></span>
                        <span className="review-total">309 · Superhost</span>
                    </div>
                </div>
        
            </Link>
        </div>
      )
  }
}
export default Abode;