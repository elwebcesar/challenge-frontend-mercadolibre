import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

import '../sass/_Results.scss'
import '../sass/_Buttons.scss'

import { SearchMapped } from '../models/SearchMapped';
import { ItemMapped } from '../models/ItemMapped';


export default function Results(props) {

  let componentLoad

  if ( Object.entries(props.results).length > 0) {

    // case consult
    if( props.case === 'search') {
      const resultProductList = new SearchMapped(props.results)
      // console.log(resultProductList)

      componentLoad =
        <article>
          <ul className='content-info__list'>
            {
            resultProductList.items.map(detalle => (
              <li key={detalle.id}>
                <Link to={`/items/${detalle.id}`} className="___element a">
                  <img src={detalle.picture} alt={detalle.title} />
                </Link>
                <div className="___element b">
                  <h3>
                    {`$ ${detalle.price.amount}` }
                    {detalle.free_shipping ? <span className='free' title='Envio gratis'></span> : ""}
                  </h3>
                  <h2>
                    <Link to={`/items/${detalle.id}`}>
                      {detalle.title}
                    </Link>
                  </h2>
                </div>
                <div className="___element c">
                  {detalle.condition}
                </div>
              </li>
            ))
            }
          </ul>
        </article>
    }
    else if( props.case === 'item') {
      const resultProductList = new ItemMapped(props.results)
      // console.log(resultProductList)

      let priceDeciman = resultProductList.item.price.decimals.toString()
      priceDeciman = priceDeciman.substring(2, 4)

      componentLoad =
        <article className='content-info__info'>
          {
            <>
            <div className="___element a">
              <img src={resultProductList.item.picture} alt={resultProductList.item.title} />
            </div>
            <div className="___element b">
              <h3>{resultProductList.item.title}</h3>
              <h2>{`$ ${resultProductList.item.price.amount}`}<span>{priceDeciman}</span></h2>
              <button type='button' className='btn'>Comprar</button>
            </div>
            </>
          }
        </article>
    }
  }
  else {
    componentLoad = <div>Loading</div>
  }

  return (
    <section className='content-info wrap margin-t-15'>
      {componentLoad}
    </section>
  )
}
