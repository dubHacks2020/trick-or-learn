import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Instructionpng from '../images/instructions.png';

class Instructions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="instructions-body">
                <div className="instructions-container">
                    <img src={Instructionpng} className="instructions"/>
                </div>
                <div className="home-buttons-container">
                    <Link className={"nav-links"} to={'/'}> 
                        <button className="back-button">back</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Instructions;
