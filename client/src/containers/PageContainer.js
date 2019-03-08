import React from "react";
import BookingBox from "../components/BookingBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state=[{data: null}]
    }

    render(){
        return (
            <div className="page-container">
                <BookingBox/>
            </div>
        )
    }
}


export default PageContainer;