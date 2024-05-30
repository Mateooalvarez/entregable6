import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const FormRating = ({ bookSelected, setBookSelected }) => {

    const { handleSubmit, reset, register } = useForm()

    const [,, createReview] = useCrud()

    const submit = data => {
        const url = 'https://hotels-api.academlo.tech/reviews'
        const bodyData = {
            ...data,
            hotelId: bookSelected.hotelId 
        } 
        createReview(url, bodyData, true)
        reset ({
            rating: '5',
            comment: ''
         })
         setBookSelected()
    }

    return (
        <div>
            <article>
            <h2>Book</h2>
            <img className="slider__img" src={bookSelected?.hotel.images[0].url} alt="" />
            <h4>{bookSelected?.hotel.name}</h4>
            <form  className="rating__form" onSubmit={handleSubmit(submit)}>
            <label >
            <span>Rating</span>
            <select {...register('rating')}>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
            </select>
            </label>
            <label>
            <span>Comments</span>
            <textarea {...register('comment')} />
            </label>
            <button>Submit</button>
            </form>
            </article>
        </div>
    )
}

export default FormRating