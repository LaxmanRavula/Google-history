import './index.css'

const EachItem = props => {
  const {eachCard, removeButton} = props
  const {timeAccessed, title, domainUrl, logoUrl, id} = eachCard
  const removeItem = () => {
    removeButton(id)
  }
  return (
    <li className="listed">
      <div className="leftSide">
        <div>
          <p className="time">{timeAccessed}</p>
        </div>
        <div className="middle">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="title">{domainUrl}</p>
        </div>
      </div>
      <button type="button" className="button" onClick={removeItem} id="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteButton"
        />
      </button>
    </li>
  )
}

export default EachItem
