/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {topScore: 0, clickedEmojiIds: [], isGameInProgress: true}

  resetGame = () => {
    this.setState({
      clickedEmojiIds: [],
      isGameInProgress: true,
    })
  }

  finishGameAndSetScore = currentScore => {
    this.setState(prevState => ({
      topScore:
        prevState.topScore < currentScore ? currentScore : prevState.topScore,
      isGameInProgress: !prevState.isGameInProgress,
    }))
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiIds} = this.state

    if (clickedEmojiIds.includes(id)) {
      this.finishGameAndSetScore(clickedEmojiIds.length)
    } else {
      if (emojisList.length - 1 === clickedEmojiIds.length) {
        this.finishGameAndSetScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojiIds: [...prevState.clickedEmojiIds, id],
      }))
    }
  }

  renderEmojiCards = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    return (
      <ul className="emoji-cards-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            updateScore={this.onClickEmoji}
            emojiDetails={eachEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiIds} = this.state
    return (
      <WinOrLoseCard
        winningScore={emojisList.length}
        currentScore={clickedEmojiIds.length}
        resetGame={this.resetGame}
      />
    )
  }

  render() {
    const {topScore, clickedEmojiIds, isGameInProgress} = this.state
    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          currentScore={clickedEmojiIds.length}
          isGameInProgress={isGameInProgress}
        />
        <div className="game-container">
          {isGameInProgress
            ? this.renderEmojiCards()
            : this.renderWinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
