import React from "react";
import BookingBox from "../components/BookingBox";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state=[{data: null}]
    }

    render(){
        return (
            <div>
                <h2>Page level 2</h2>
                <BookingBox/>
            </div>
        )
    }
}


export default PageContainer;