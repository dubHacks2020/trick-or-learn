import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="home-body">
                <div className="home-title">
                    title here
                </div>
                <div className="home-buttons-container">
                    <button className="home-buttons">
                        <Link className={"nav-links"} to={'/Game'}> Start Game </Link>
                    </button>
                    <button className="home-buttons">
                    <Link className={"nav-links"} to={'/Card_Manager'}> Manage Deck </Link>
                    </button>
                    <button className="home-buttons"> 
                        <Link className={"nav-links"} to={'/Instructions'}> Instructions </Link>
                    </button>
                </div>

            </div>
            
        )
    }
}

export default Home;