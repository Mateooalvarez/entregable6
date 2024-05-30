import { configureStore } from '@reduxjs/toolkit'
import products from './slice/products.slice'

export default configureStore({
  reducer:{
    products
  }
})