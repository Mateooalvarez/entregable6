import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import { OtherHotels } from '../components/HotelIdPage/OtherHotels'
import MapHotel from '../components/HotelIdPage/MapHotel'
import FormReservations from '../components/HotelIdPage/FormReservations'
import './style/HotelIdPage.css'
import SliderImgs from '../components/HotelIdPage/SliderImgs'

const HotelIdPage = () => {

const { id } = useParams()

const [ hotel, getHotel ] = useFetch()

useEffect(() => {
    const url = `https://hotels-api.academlo.tech/hotels/${id}`
 getHotel(url)
}, [id])

const maxRating = 5;

const stars = Array.from({ length: maxRating}, (_, index) => (
  <i
    key={index}
    className={index < Math.floor(hotel?.rating) ? "bx bxs-star" : "bx bx-star"}
  ></i>
));

  return (
    <article className='hotels__header'>
        <h2 className='hotel__title'>{hotel?.name}</h2>
        <div className='hotel__name__value'>
        <span className='hotell__rating'>{stars} {hotel?.rating}</span>
        </div>
        <div>
        <SliderImgs hotel={hotel}/>
        </div>
        {
        hotel && (
        <MapHotel 
        lat={hotel?.lat}
        lon={hotel?.lon}
        />
        )
        }
        <div>{hotel?.city.name}, {hotel?.city.country}</div>
        <div className='hotel__direction'>
            <i className='bx bx-map'></i>
            <address>{hotel?.address}</address>
        </div>
        <p>{hotel?.description}</p>
        <section>
          {
            localStorage.getItem('token')
            ? (
              <FormReservations 
              hotelId={hotel?.id}
              />
            )
            : <p>If you want to bok <Link to='/login'>Login</Link></p>
          }
        </section>
        <OtherHotels 
        city={hotel?.city}
        id={id} 
        />
    </article>
  )
}

export default HotelIdPage