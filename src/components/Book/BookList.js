import React from 'react';

const BooksList = () => {
    return (
    <div>
        <h2>Books List Section</h2>
        <ul className='list-group'>
            <li className='list-group-item d-flex  justify-content-between align-items-center'>
                <div>book list operations: </div>
                <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-primary m-1 rounded-2'> Read </button>
                    <button type='button' className='btn btn-danger m-1 rounded-2'> Delete </button>
                </div>
            </li>
        </ul>
    </div>
    );
};

export default BooksList;