import React from "react";
import EnemySprite from '../images/wizard.png';
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
                <img src={EnemySprite} className="Player"/>
            </div>
        );
    }
}

export default Player;