import { useState } from "react";
import GamePieces from "./GamePieces";


const GameState = () => {

const [score, setScore] = useState(0);
const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0)
const [gameOver, setGameOver] = useState(false);
const [collison, setCollisonType] = useState("");

return(
    <div>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
        {
            gameOver && (
                <div>
                    <p>Game Over! {collison == "wall" ? "You hit the wall" : "You ate the body"}!</p>
                    <p>Please press enter to reset the game</p>
                </div>
            )
        }{
            !gameOver && (
                <GamePieces />
            )
        }
    </div>
)

}

export default GameState