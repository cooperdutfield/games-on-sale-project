import React, { useEffect, useState } from "react";

const GameShow = props => {
    const [game, setGame] = useState({
    name: "",
    developer:"",
    publisher:"",
    image:""
})
const gameId = props.match.params.id
const getGame = async () => {
    try {
        const response = await fetch (`/api/v1/games/${gameId}`)
        if(!response.ok) {
            const errorMessage = `${response.status} ($response.statusText)`
            const error = new Error(errorMessage)
            throw err
        }
            const body = await response.json()
            setGame(body.game)
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`)
        }
    }

    useEffect(() => {
        getGame()
    }, [])

    return(
        <div className="game-container">
        <div className="game-image">
          <img src={game.image} alt="Game Image" img/>
        </div>
        <div className="game-details">
          <h1>{game.name}</h1>
          <p><strong>Developer:</strong> {game.developer}</p>
          <p><strong>Publisher:</strong> {game.publisher}</p>
        </div>
      </div>
      
    )
}

export default GameShow