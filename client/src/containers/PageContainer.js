import React from "react";
import BookingBox from "../components/BookingBox";
import BookingTableForm from "../components/BookingTableForm"

import TableBox from "../components/TableBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state={bookings: null}

    }

    componentDidMount() {
        const url_bookings = "http://localhost:8080/bookings";
        fetch(url_bookings)
            .then(res => res.json())
            .then(data => this.setState({bookings: data._embedded.bookings}))
            .catch(err => console.error(err))


        const url_tables = "http://localhost:8080/diningTables";
        fetch(url_tables)
            .then(res => res.json())
            .then(data => this.setState({tables: data._embedded.diningTables}))
            .catch(err => console.error(err))

    }

    // handleEdit(id) {
    //     console.log(id)
    // }

    deleteBooking(id) {
        console.log(id);
    }

    render(){
        return (
            <div className="page-container">
              <BookingTableForm/>
              <TableBox tables = {this.state.tables}/>
                <BookingBox
                bookings = {this.state.bookings}
                // edit = {this.handleEdit}
                delete = {this.deleteBooking}/>
            </div>

        )
    }
}


export default PageContainer;
