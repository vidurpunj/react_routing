import React from 'react';

const PageInfo = (props) => {
    return (
        <div>
            <p>Page No: {props.page_no}, Per Page: {props.per_page}, Total: {props.total}, Total
                Pages: {props.total_pages}</p>
        </div>
    )
}

export default PageInfo