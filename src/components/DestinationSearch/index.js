import Items from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props

  const onSearch = event => {
    const input = event.target.value

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.includes(input),
    )
    return searchResults
  }

  return (
    <div className="bg">
      <h1 className="heading">Destination Search</h1>
      <div className="searchDiv">
        <input
          type="search"
          placeholder="search"
          className="searchBox"
          onChange={onSearch}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="icon"
        />
      </div>
      <ul className="list">
        {destinationsList.map(eachUser => (
          <Items
            imgUrl={eachUser.imgUrl}
            name={eachUser.name}
            key={eachUser.id}
          />
        ))}
        )
      </ul>
    </div>
  )
}

export default DestinationSearch
