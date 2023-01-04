// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, currentScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="navbar-elements-container">
        <div className="app-logo-container">
          <img
            className="app-logo"
            alt="emoji logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          />
          <h1 className="app-title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="scores-text">Score: {currentScore}</p>
            <p className="scores-text">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
