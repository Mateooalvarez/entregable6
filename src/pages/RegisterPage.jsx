import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import './style/RegisterPage.css'

const RegisterPage = () => {

 const {  register, handleSubmit, reset } = useForm()
 
 const { createUser } = useAuth()

const submit = data => {
    createUser(data)
    reset({
        firstName: '',
        lastName: '',
        email:'',
        password:'',
        gender:'male'
    })
}

  return (
    <div className="login">
    <form className="login__page" onSubmit={handleSubmit(submit)}>
      <h2>Register</h2>
        <div className="login__form">
          <label className="login__label">
            <span>First name</span>
            <input className="login__input" {...register('firstName')} type="text" />
          </label>
          <label className="login__label">
            <span>Last name</span>
            <input className="login__input" {...register('lastName')} type="text" />
          </label>
          <label className="login__label">
            <span>Email</span>
            <input className="login__input" {...register('email')} type="email" />
          </label>
          <label className="login__label">
            <span>Password</span>
            <input className="login__input" {...register('password')} type="password" />
          </label>
          <label className="login__label">
            <span>Gender</span>
            <select className="login__select" {...register('gender')}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <button className="login__button">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage