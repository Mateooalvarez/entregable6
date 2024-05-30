import { useForm } from "react-hook-form"
import useCrud from "../../hooks/useCrud"

const FormReservations = ({ hotelId }) => {
    
    const {register, handleSubmit, reset} = useForm()

    const [ ,,createBooking ] = useCrud()

    const submit = data => {
    const url = 'https://hotels-api.academlo.tech/bookings'
    const objData = {
        ...data,
        hotelId
    }
    createBooking(url, objData, true)
    reset({
        checkIn: '',
        checkOut: ''
    })
    }
    
    return (
    <form onSubmit={handleSubmit(submit)}>
        <h3>If you want to book, plis give me your:</h3>
        <label >
            <span>Check-in</span>
            <input {...register('checkIn')} type="date" />
        </label>
        <label >
            <span>Check-out</span>
            <input {...register('checkOut')} type="date" />
        </label>
        <button>Reserve a room!</button>
    </form>
  )
}

export default FormReservations
