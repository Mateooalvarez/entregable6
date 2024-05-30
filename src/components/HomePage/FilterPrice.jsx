import { useForm } from "react-hook-form"

const FilterPrice = ({ setFromTo }) => {

  const { handleSubmit, reset, register } = useForm()

  const submit = data => {
    const from = Number(data.from)
    const to = Number(data.to)
    setFromTo({
        from: data.from === '' ? 0 : from,
        to: data.to === '' ? Infinity : to
    })
    reset({
        from:'',
        to:''
    })
  }

    return (
        <article>
        <h4>Price</h4>
        <form onSubmit={handleSubmit(submit)}>
          <label>
            <span>From</span>
            <input {...register('from')} type="number" />
          </label>
          <label>
            <span>To</span>
            <input {...register('to')} type="number" />
          </label>
          <button>Submit</button>
        </form>
      </article>
    )
}

export default FilterPrice