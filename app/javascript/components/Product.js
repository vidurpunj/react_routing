import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import PageInfo from "./PageInfo";
import classes from './Product.module.css';

const Product = () => {
    const [products, setProducts] = useState([])
    const [details, setDetails] = useState([])

    useEffect(() => {
        axios.get('/products')
            .then(resp => {
                setProducts(resp.data.data)
                setDetails(resp.data)
                // For local storage for 100 minute
                var dateAv = new Date();
                var endTime = new Date(dateAv.getFullYear(), dateAv.getMonth(), dateAv.getDate(), dateAv.getHours(), dateAv.getMinutes() + 100);
                var object = {'products': products, timestamp: endTime.getTime()}
                localStorage.setItem( 'key', JSON.stringify(object));
            })
            .catch(resp => console.log(resp))
    }, [products.length])

    const list = products.map(item => {
        return <div className={classes.circleBase} style={{background: item.color}} key={item.name}>{item.name}</div>
    })

    return (
        <Fragment>
            <PageInfo page_no={details.page} per_page={details.per_page} total={details.total} total_pages={details.total_pages}/>
            <div>This is my products</div>
            <ul>{list}</ul>
        </Fragment>
    )
}

export default Product