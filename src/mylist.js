import React from "react";

export class MyList extends React.Component{

    render(){
        return(
            <>
             <ul>
              {this.props.tasks.map((task, index) => 
              (<li key={task + index}>{task}</li>))}
             </ul>
            </>
        )
    }
}