import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Cards from '../images/flashcards.png';

class CardManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="CardManager-body">
                <div className="CardManager-container">
                    <img src={Cards} className="card"/>
                </div>
                <div className="manage-buttons-container">
                    <Link className={"nav-links"} to={'/'}> 
                        <button className="home-buttons">back</button>
                    </Link>
                    <Link className={"nav-links"}> 
                        <button className="home-buttons">edit</button>
                    </Link> 
                </div>
            </div>
        )
    }
}

export default CardManager;