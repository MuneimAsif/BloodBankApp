import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './reducer/cartSlice'
import userSlice from './reducer/userSlice'
const store = configureStore({
    reducer:{
        cart:cartSlice,
        user:userSlice,
    }
})

export default store 