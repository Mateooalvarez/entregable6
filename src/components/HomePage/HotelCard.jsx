import { useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'
import 'boxicons'

const HotelCard = ({ hotel }) => {

  const navigate = useNavigate()

const handleNavigateId = () => {
 navigate(`/hotel/${hotel.id}`)
}

const maxRating = 5;

const stars = Array.from({ length: maxRating}, (_, index) => (
  <i
    key={index}
    className={index < Math.floor(hotel.rating) ? "bx bxs-star" : "bx bx-star"}
  ></i>
));

  return (
    <div className='hotel__id'>
    <article className='hotel'>
    <header className='hotel__header'>
        <img  className='hotel__picture' src={hotel.images[0].url} alt="" />
    </header>
    <section className='hotel__section'>
    <h3 className='hotel__name'>{hotel.name}</h3>
    <div>
      <div className='hotel__raiting'>{stars} {hotel.rating} {hotel.images.url}</div>
    </div>
    <div className='hotel__location'>{hotel.city.name}, {hotel.city.country}</div>
    <div className='hotel__price'>$  {hotel.price}</div>
    <footer className='hotel__btn__footer'>
    <button onClick={handleNavigateId} className='hotel__btn'>See more...</button>
    </footer>
    </section>
    </article>
  </div>
  )
}

export default HotelCard