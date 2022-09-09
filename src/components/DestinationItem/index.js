// Write your code here

import './index.css'

const Items = props => {
  const {imgUrl, name} = props

  return (
    <li>
      <div className="mrg">
        <img src={imgUrl} alt={name} className="img" />
        <p className="para">{name}</p>
      </div>
    </li>
  )
}

export default Items
