import React from "react";
import IconLocation from "../img/icon_location.svg";

export default function Navbar(props) {
    console.log(props);
    return (
        <div className="card">
            <div className="card-img--wrapper">
                <img className="card--img" src={props.imgSrc} alt="Monterrey" />
            </div>
            <div className="card-text--wrapper">
                <div className="card--header">
                    <h2 className="card--loc">{props.loc}</h2>
                    <a className="card--gmaps" href={props.gmaps}> <img src={IconLocation} alt="loc icon" />View on Google Maps</a>
                </div>
                <p className="card--event">{props.event}</p>
                <p className="card--date">{props.date}</p>
                <p className="card--desc">{props.desc}</p>
            </div>
        </div>
    )
}