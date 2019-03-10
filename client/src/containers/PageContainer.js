import React from "react";
import BookingBox from "../components/BookingBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state={bookings: null}

    }

    componentDidMount() {
        const url = "http://localhost:8080/bookings";
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({bookings: data._embedded.bookings}))
        .catch(err => console.error(err))
    }

    render(){
        return (
            <div className="page-container">
                <BookingBox bookings={this.state.bookings}/>
            </div>
        )
    }
}


export default PageContainer;
