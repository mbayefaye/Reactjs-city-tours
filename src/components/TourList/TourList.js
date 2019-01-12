import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../tourData";

class TourList extends Component {
	state = {
		tours: tourData
	};
	
   
 	removeTours = (id) => {
	 const {tours} = this.state;
	 const sortedTours = tours.filter(tour =>tour.id !== id);
	 this.setState({
	 	tours:sortedTours
	 })
	 console.log(sortedTours)
	};



	render() {
		const { tours } = this.state;
		console.log(tours)
		return (
			<section className="tourList">
				{tours.map(tour => {
					return <Tour key={tour.id} tour={tour} removeTours={this.removeTours} />;
				})}
			</section>
		);
	}
}

export default TourList;
