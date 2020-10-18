import React from "react";
import Player from "./Player.js";
import Enemy from "./Enemy.js";
import SpeechCard from "./SpeechCard.js";
import "../App.css";


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // array of [question, ans]
            flashcards: [["q1", "a1"], ["q2", "a2"], ["q3", "a3"]],
            // array of numbers from 0 ... flashcards.size-1 in random order
            order: [2, 3, 1]
        }
    }

    render() {
        const { flashcards, order } = this.state;
        return (
            <div>
                <div className="game-graphics">
                    <div>
                        <Player myClassName="player" lives={3} />
                    </div>
                    <div className="enemies">
                        < Enemy question={flashcards[0][0]} myClassName="enemy1" />
                        < Enemy question={flashcards[2][0]} myClassName="enemy2" />
                        < Enemy question={flashcards[1][0]} myClassName="enemy3" />
                    </div>
                </div>
                <SpeechCard/>
             </div>
        )
    }
}

export default Game;