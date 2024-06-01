import React from 'react'
import * as SF from './StoreFrontStyle'
import { GET_PRODUCTS, queryType } from '../../helpers/api';
import { ProductsTypes } from '../../types/types';

function StoreFront() {

    const [query, setQuery] = React.useState({} as queryType);
    const [data, setData] = React.useState({} as ProductsTypes);

    async function getProducts() {
        const { url, option } = GET_PRODUCTS(query);
        const response = await fetch(url, option);
        const json = await response.json();
        setData(json)
        console.log(json);
    }

    React.useEffect(() => {

        setQuery({
            page: 1,
            rows: 10,
            sortby: 'id',
            orderby: 'DESC'
        })
        getProducts();
    }, [])

    return (
        <div>
            {
                data
                    ?
                    <SF.Card>
                        <img src={data.products[0].photo} alt="" />
                        <SF.Title>{data.products[0].name}</SF.Title>
                        <SF.Description>{data.products[0].description}</SF.Description>
                        <SF.Price>R$ {data.products[0].price}</SF.Price>
                        <SF.Comprar>Comprar</SF.Comprar>
                    </SF.Card>
                    :
                    null
            }
        </div>
    )
}

export default StoreFront