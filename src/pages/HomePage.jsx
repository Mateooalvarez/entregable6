import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from '../store/slice/products.slice'
import HotelCard from '../components/HomePage/HotelCard'
import FilterName from '../components/HomePage/FilterName'
import FiltersCity from '../components/HomePage/FiltersCity'
import FilterPrice from '../components/HomePage/FilterPrice'

const HomePage = () => {

  const [nameSearched, setNameSearched] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

const products = useSelector(states => states.products)

console.log({products, nameSearched})

console.log(products)

const dispatch = useDispatch()

useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
 dispatch(getHotelsThunk(url))
}, [])

const cbFilter = (hotel) => {
  //Filter by name
 const FilterName = hotel.name.toLowerCase().includes(nameSearched)
 //Filter by price
 const price = Number(hotel.price)
 const filterByPrice = price >= fromTo.from && price <= fromTo.to
 return FilterName && filterByPrice
}

  return (
    <div> 
      <FilterName
      setNameSearched={setNameSearched}
      />
      <section>
        <h3>Filters</h3>
        <FilterPrice 
        setFromTo={setFromTo}
        />
        <FiltersCity />
      </section>
        <div className='hotel__card'>
            {
             products?.filter(cbFilter).map(hotel => (
                <HotelCard 
                key={hotel.id}
                hotel={hotel}
                />
             ))
            }
        </div>
    </div>
  )
}

export default HomePage