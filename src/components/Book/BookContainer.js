import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BookList';

import {useDispatch , useSelector} from 'react-redux'
import './book.css';
import { getBooks } from '../../store/bookSlice';

const PostContainer = () => {

    const dispatcher = useDispatch();
    //the callback functionality it will handle by default by react redux toolkit internally!
    // also the main objective from this section is to get data or to running fetch operation when page is loaded

    useEffect(() => {
        dispatcher(getBooks());
    },[dispatcher]);

    // to access the states from store use : useSelector by using this path :
    // start here -> store by using [ useSelector ] retrieves isLoading from -> reducer
    //component -> store -> reducer
    const {isLoading , books} = useSelector((state) => state.book); // state.book have both states : isLoading and books but we needed isLoading

    return (
        <Fragment>
            <hr className='my-5'/>
            <div className='row'>
                <div className='col'> <BooksList isLoading={isLoading} booksData={books} /> </div>
                <div className='col side-line'> <BookInfo /> </div>
            </div>
        </Fragment>
    );
};

export default PostContainer;