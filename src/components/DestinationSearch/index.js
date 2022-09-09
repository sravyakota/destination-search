import {Component} from 'react'

import Items from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg">
        <h1 className="heading">Destination Search</h1>
        <div className="searchDiv">
          <input
            type="search"
            placeholder="search"
            className="searchBox"
            onChange={this.onSearch}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="list">
          {searchResults.map(eachUser => (
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
}

export default DestinationSearch
