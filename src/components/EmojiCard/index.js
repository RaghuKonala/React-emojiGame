// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, updateScore} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onClickEmoji = () => updateScore(id)
  return (
    <li className="emoji-item">
      <button onClick={onClickEmoji} className="emoji-button" type="button">
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
