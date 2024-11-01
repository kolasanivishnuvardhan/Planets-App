import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  console.log(details)
  return (
    <div className="planet-item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
