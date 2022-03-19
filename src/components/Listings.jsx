import { useNavigate, Link  } from 'react-router-dom'
import React from 'react'

const Listings = (props) => {

  let navigate = useNavigate()

  const showBoat = (boat) => {
    navigate(`${boat.id}`)
  }

  return (
    <div className="boat-grid">
      {
      props.boats.map((boat) => (
        <Link to={`/listings/${boat.id}`}>
          <div className="boat-card" onClick={() => showBoat(boat)} key={boat.id}>
            <img style={{ display: 'block' }} src={boat.img} alt={boat.name} />
            <h3>{boat.name}</h3>
          </div>
        </Link>
      ))}
    </div>
    
  )
}

export default Listings
