import { use, useEffect, useRef, useState } from "react"


const GamePieces = () => {

    const canvasRef = useRef();
    const SNAKE_SPEED = 10;
    const [apple, setApple] = useState({ x: 100, y: 100 });
    const [snake, setSnake] = useState([
        { x: 100, y: 50 },
        { x: 95, y: 50 },
    ]);

    const [direction, setDirection] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        const drawSnake = () => {
            snake.forEach((snakePark) => {
                ctx.beginPath();
                ctx.rect(snakePark.x, snakePark.y, 14, 14)
                ctx.fillStyle = "#90EE90";
                ctx.fill()
                ctx.closePath()
            })
        }

        const drawApple = () => {
            ctx.beginPath();
            ctx.rect(apple.x, apple.y, 14, 14)
            ctx.fillStyle = "#FF0000";
            ctx.fill()
            ctx.closePath()
        }

        const interval = setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawSnake()
            drawApple()
        }, 100)


        return () => {
            clearInterval(interval);
        }

    }, [snake, direction])




    return (
        <div>
            <canvas className="gameCanvas" ref={canvasRef} width={750} height={420} />
        </div>
    )

}

export default GamePieces