import React from "react";
import "./style.css";

const Shaker = props => <div className= {props.shaker===true ? "shaker" : "still"}>{props.friends}</div>;

export default Shaker;