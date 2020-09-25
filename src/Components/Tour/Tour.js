import React, { Component } from 'react';
import "./Tour.scss";


export default class Tour extends Component {
    state = {
        showInfo: false
    }

    tourExtra = () => {
        return {
            transition: "1s",
            transform: this.state.showInfo? "translateY(0px)" : "translateY(-100px)",
            transitionDuration: "1s",
            visibility: this.state.showInfo? "visible" : "hidden",
            opacity: this.state.showInfo? "1" : "0"
        }
    }

    tourSlide = () => {
        return {
            height: this.state.showInfo? "100%" : "90%"
        }
    }

    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    handleInfo2 = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }

    info = () => {
        
    }

    render() {
        return (
           <div>
            <article className="tour">
                
                <div className="img-container-container">
                    <div className="img-container">
                        <img 
                            
                            src={this.props.tour.img}
                            alt="" 
                        />
                        <span className="close-btn">
                        <a target="_blank" rel='noreferrer' href={this.props.tour.wiki}><i className="fab fa-wikipedia-w"></i></a>
                        </span>
                    </div>
                </div>
                <div className="tour-info" style= {this.tourSlide()}>
                    <h3>{this.props.tour.city}</h3>    
                    <h5>
                      
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down"></i>
                        </span>
                    </h5>
                    {(this.state.showInfo) && <p style={this.tourExtra()}>{this.props.tour.info}</p> }
                    
                    
                   
                </div>
            </article>
            </div>
        )
    }
}
