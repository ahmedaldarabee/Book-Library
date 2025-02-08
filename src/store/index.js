import { configureStore } from "@reduxjs/toolkit";
import book from './bookSlice'

export default configureStore({
    reducer:{
        book
    }
})