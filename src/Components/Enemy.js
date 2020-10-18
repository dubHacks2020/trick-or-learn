import React from "react";
import EnemySprite from '../images/eviljackolantern.png';
import "../App.css"


class Enemy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myClassName: props.myClassName,
            status: "alive", 
            question: props.question,
            xpos: 0,
            ypos: 0
        }
    }

    render() {
        return (
            <div className={this.state.myClassName}>
                <img src={EnemySprite} className="sprite"/>
                <div className="sprite-card">
                    {this.state.question}
                </div>
            </div>
        );
    }
}

export default Enemy;