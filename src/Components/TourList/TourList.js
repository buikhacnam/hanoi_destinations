import React, { Component } from 'react';
import Tour from "../Tour/Tour";
import "./TourList.scss";
import {tourData} from '../tourData';

export default class TourList extends Component {
    
    state = {
        tours: tourData
    }

    removeTour = id => {
        this.setState({tours: [...this.state.tours.filter(tour =>{
          console.log(this.state.tours)
            return  tour.id !== id
          
        })]})   
    }

    render() {
        const {tours} = this.state;
        // const tours = this.state.tours

        return (
            <section className="tourlist">
                {tours.map(tour => {
                 return <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                })}
            </section>
        )
    }
}
