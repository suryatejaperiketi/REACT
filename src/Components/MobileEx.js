import React, { Component } from "react";

  export default class MobileEx extends Component{
    render(){
        return(
            <div className="mobile">
                <figure>
                    <img src={this.props.path} alt=""/>
                    <figcaption>
                        <h4>{this.props.model}</h4>
                        <p><strong>{this.props.price}</strong></p>

                    </figcaption>
                </figure>

            </div>
        )
    }
}