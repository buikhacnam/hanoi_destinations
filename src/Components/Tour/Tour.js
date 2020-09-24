import React, { Component } from 'react';
import "./Tour.scss";

export default class Tour extends Component {
    render() {
        return (
            <article className="tour">
                <div className="img-container-container">
                <div className="img-container">
                    <img 
                        
                        src={this.props.tour.img}
                        alt="" 
                    />
                    <span className="close-btn">
                       <i className="fas fa-window-close"></i>
                    </span>
                </div>
                </div>
                <div className="tour-info">
                    <h3>{this.props.tour.city}</h3>    
                    <h4>{this.props.tour.name}</h4>
                    <h5>
                        info
                        <span>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    <p>{this.props.tour.info}</p>
                </div>
            </article>
        )
    }
}
