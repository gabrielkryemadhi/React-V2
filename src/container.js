import React from "react";

export class Container extends React.Component {

    redner(){
        return(
            <div className="container">
             <div className="container-title">
                {this.props.title}
             </div>
             <div>
                {this.props.children}
             </div>
            </div>
        )
    }
}