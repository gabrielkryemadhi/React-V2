import React from "react";

export class Container extends React.Component {
    redner(){
        return(
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Container