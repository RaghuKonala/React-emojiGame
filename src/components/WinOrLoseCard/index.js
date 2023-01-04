// Write your code here.
import './index.css'

const WIN_URL = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_URL = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {currentScore, winningScore, resetGame} = props
  const isWon = currentScore === winningScore

  const resultUrl = isWon ? WIN_URL : LOSE_URL
  const result = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-card">
      <div className="result-image-container">
        <img className="result-image" alt="win or lose" src={resultUrl} />
      </div>
      <div className="result-details-container">
        <h1 className="game-result">{result}</h1>
        <p className="score-label">{scoreLabel}</p>
        <p className="score">
          {currentScore}/{winningScore}
        </p>
        <button onClick={resetGame} className="play-button" type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
