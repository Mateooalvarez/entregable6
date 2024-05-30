import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './style/LoginPage.css'

const LoginPage = () => {

const { handleSubmit, register, reset } = useForm()

const { loginUser } = useAuth()

const submit = data => {
 loginUser(data)
    reset({
        email: '',
        password: ''
    })
}

  return (
    <div className='login'>
      <img class="login__img" src="src/images/user.png" alt=""></img>
       <form className='login__page' onSubmit={handleSubmit(submit)}>
        <h2 className='login__title'>USER</h2>
        <div className='login__form'>
          <label className='login__label'>
            <span>Email</span>
            <input className='login__input' {...register('email')} type="email" />
          </label>
          <label className='login__label'>
            <span>Password</span>
            <input className='login__input' {...register('password')} type="password" />
          </label>
        </div>
        <button className='login__btn'>Submit</button>
      </form> 
    </div>
  )
}

export default LoginPage