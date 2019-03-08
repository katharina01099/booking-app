import React from "react";

class PageContainer extends React.Component{
    constructor (props){
        super(props)
        this.state=[{data: null}]
    }

    render(){
        return (
            <div>
                <h2>Page level 2</h2>
                <p>bookings are awesome</p>
            </div>
        )
    }
}


export default PageContainer;