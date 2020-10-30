import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import PageInfo from "./PageInfo";

const Product = () => {
    const [products, setProducts, page_no, set_page_no] = useState([])

    useEffect(() => {
        axios.get('/products')
            .then(resp => {
                setProducts(resp.data.data)
                set_page_no(resp.data.page)

            })
            .catch(resp => console.log(resp))
    }, [products.length])

    const list = products.map(item => {
        return <li key={item.name}>{item.name}</li>
    })
    const page_number = page_no;
    return (
        <Fragment>
            <PageInfo page_no={page_number} per_page={2} total={3} total_pages={4}/>
            <div>This is my products</div>
            <ul>{list}</ul>
        </Fragment>
    )
}

export default Product