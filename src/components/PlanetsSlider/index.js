import './index.css'
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'


const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="planets-bg-container" data-testid="planets">
      <h1 className="planets">PLANETS</h1>
      <Slider {...settings} className="planets-items-container">
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} details={eachPlanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
