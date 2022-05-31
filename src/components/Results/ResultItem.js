import React from 'react'

import { ItemMapped } from '../../models/ItemMapped'
import { ConsumeApi } from '../ConsumeApi'

export const ResultItem = (props) => {

    const resultProductList = new ItemMapped(props.results)
    // console.log(resultProductList)

    let priceDeciman = resultProductList.item.price.decimals.toString()
    priceDeciman = priceDeciman.substring(2, 4)

    const apiUrlDescription = `https://api.mercadolibre.com/items/${resultProductList.item.id}/description`
    const apiUrlCategory = `https://api.mercadolibre.com/categories/${ resultProductList.item.category_id}`

    return (
        <>
        <nav className="breadcrumb wrap margin-t-15">
            <ul>
                {           
                <ConsumeApi url_api={apiUrlCategory} case={'category'} />
                }
            </ul>
        </nav>        
        <section className='content-info wrap margin-t-15'>
            <article className='content-info__info'>
                <div className="___element a">
                    <img src={resultProductList.item.picture} alt={resultProductList.item.title} />
                </div>
                <div className="___element b">
                    <h3>{resultProductList.item.title}</h3>
                    <h2>{`$ ${resultProductList.item.price.amount}`}<span>{priceDeciman}</span></h2>
                    <button type='button' className='btn'>Comprar</button>
                </div>
            </article>
            <aside>
                <ConsumeApi url_api={apiUrlDescription} case={'description'} />
            </aside>
        </section>
        </>
    )
}
