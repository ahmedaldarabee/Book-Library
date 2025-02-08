import React from 'react';

const BooksList = ({isLoading,booksData}) => {
    const bookData = booksData.length > 0 ? booksData.map( (data) => ( //as you see () => () <- this notation () because accepted
        <li className='list-group-item d-flex  justify-content-between align-items-center' key={data.id}>
            <div>{data.title} </div>
            <div className='btn-group' role='group'>
                <button type='button' className='btn btn-primary m-1 rounded-2'> Read </button>
                <button type='button' className='btn btn-danger m-1 rounded-2'> Delete </button>
            </div>
        </li>
    )) : 'There is no data available!';

    return (
    <div>
        <h2>Books List Section</h2>
        <ul className='list-group'> { isLoading ? ('is loading...') : bookData} </ul>
    </div>
    );
};

export default BooksList;