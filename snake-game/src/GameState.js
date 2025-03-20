import { useEffect, useState } from "react";
import GamePieces from "./GamePieces";


const GameState = () => {

const [score, setScore] = useState(0);
const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0)
const [gameOver, setGameOver] = useState(false);
const [collison, setCollisonType] = useState("");

const handleGameOver = (type) => {
    setGameOver(true);

    if (score > highScore){
        setHighScore(score);
        localStorage.setItem("highScore", score.toString())
    }

    setCollisonType(type)
}

const handleResetGame = () => {
    setScore(0);
    setGameOver(false);
}

useEffect(() => {
    const handleKeyPress = (e) => {
        if(gameOver && e.key === "Enter"){
            handleResetGame()
        }
    }
    window.addEventListener("keydown", handleKeyPress)
}, [gameOver])

return(
    <div className="game-cointainer">
        <p className="score">Score: {score}</p>
        <p className="high-score">High Score: {highScore}</p>
        {
            gameOver && (
                <div className="game-over">
                    <p>Game Over! {collison == "wall" ? "You hit the wall" : "You ate the body"}!</p>
                    <p className="game">Please press enter to reset the game</p>
                </div>
            )
        }{
            !gameOver && (
                <GamePieces
                score={score}
                setScore={setScore}
                onGameOver={(type) => handleGameOver(type)}
                 />
            )
        }
    </div>
)

}

export default GameState