import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import TitleJack from '../images/title.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="home-body">
                <div className="home-title">
                    <img src={TitleJack} className="titlejack"/>
                </div>
                <div className="home-buttons-container">
                    <Link className={"nav-links"} to={'/Card_Manager'}> 
                        <button className="home-buttons">Manage Deck</button>
                    </Link>
                    <Link className={"nav-links"} to={'/Game'}> 
                        <button className="home-buttons">Start Game</button>
                    </Link> 
                    <Link className={"nav-links"} to={'/Instructions'}> 
                        <button className="home-buttons">Instructions</button>
                    </Link>
                </div>

            </div>
            
        )
    }
}

export default Home;