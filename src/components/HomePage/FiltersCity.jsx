import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getHotelsThunk } from "../../store/slice/products.slice"
import { useDispatch } from "react-redux"

const FiltersCity = () => {

   const [ cities, getCities ] = useFetch()

 useEffect(() => {
   const url = 'https://hotels-api.academlo.tech/cities'
   getCities(url)
 }, [])

 console.log(cities)

 const dispatch =useDispatch()

 const handleCityFilter = (cityId) => {
    const url = `https://hotels-api.academlo.tech/hotels${cityId ? `?cityId=${cityId}` : ''}`
    dispatch(getHotelsThunk(url)) 
}
 
  return (
    <article>
        <h4>Cities</h4>
        <ul>
         <li onClick={() => handleCityFilter()}>All cities</li>
         {
            cities?.map(city => (
            <li onClick={handleCityFilter(city.id)} key={city.id}>{city.name}</li>
            ))
         }
        </ul>
    </article>
  )
}

export default FiltersCity