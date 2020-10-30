import React from 'react';

const PageInfo = (props) => {
    return (
        <div>
            <h2>Page No: {props.page_no} </h2>
            <h2>Per Page: {props.per_page}</h2>
            <h2>Total: {props.total}</h2>
            <h2>Total Pages: {props.total_pages}</h2>
        </div>
    )
}

export default PageInfo