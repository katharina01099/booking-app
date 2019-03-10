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

    handleEdit(id) {
        console.log(id)
    }

    handleDelete(event) {
        const id = event.target;
        console.log(id);
    }

    render(){
        return (
            <div className="page-container">
                <BookingBox 
                bookings = {this.state.bookings} 
                edit = {this.handleEdit}
                delete = {this.handleDelete}/>
            </div>
        )
    }
}


export default PageContainer;