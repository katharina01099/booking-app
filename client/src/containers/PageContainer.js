import React from "react";
import BookingBox from "../components/BookingBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state={data: null}
    }

    componentDidMount() {
        const url = "http://localhost:8080/bookings";
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState(data))
    }

    render(){
        return (
            <div className="page-container">
            <h2>Layer 2</h2>
                <BookingBox/>
            </div>
        )
    }
}


export default PageContainer;
