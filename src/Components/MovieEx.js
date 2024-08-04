import React from "react";

 export default function MovieEx(props){

    return(<div className="movie">
        <figure>
            <img src={props.path} alt=""/>
            <figcaption>
             <h1>{props.title}</h1>
             <p>{props.cat}</p>
            
            </figcaption>
        </figure>

    </div>
    )
}
