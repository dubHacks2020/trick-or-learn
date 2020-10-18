import React from "react";
import EnemySprite from '../images/wizard.png';
import Heart from '../images/heart.png';
import "../App.css"


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myClassName: props.myClassName,
            lives: props.lives 
        }
    }

    render() {
        return (
            <div className={this.state.myClassName}>
                <div className="lives">
                    <img src={Heart} className="Heart1"/>
                    <img src={Heart} className="Heart2"/>
                    <img src={Heart} className="Heart3"/>
                </div>
                <img src={EnemySprite} className="Player"/>
            </div>
        );
    }
}

export default Player;