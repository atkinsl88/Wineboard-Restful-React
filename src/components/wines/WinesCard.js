import React from 'react'
import { Link } from 'react-router-dom'

const WineCard = ({ name, image, origin, grape, price, _id }) => (
  <div className="column is-one-quarter">
    <Link to={`/wines/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}</h4>
        </div>
        <div className="card-image">
          <figure className="image image is-1by1">
            <img src={image} alt={name} loading="lazy"/>
          </figure>
        </div>
        <div className="card-content">
          <h5 className="">{origin}</h5>
          <h5 className="">{grape}</h5>
          <h5 className="">£{price}</h5>
        </div>
      </div>
    </Link>
  </div>
)

export default WineCard