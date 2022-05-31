import React from 'react'
import { Link } from 'react-router-dom';
import { SearchMapped } from '../../models/SearchMapped'

export const ResultSearch = (props) => {

    const resultProductList = new SearchMapped(props.results)
    const categories = resultProductList.categories.slice(0, 4)

    return (
        <>
        <nav className="breadcrumb wrap margin-t-15">
            <ul>
                {
                categories.map((categorie) => (
                    <li key={categorie}>{categorie}</li>
                ))
                }
            </ul>
        </nav>
        <section className='content-info wrap margin-t-15'>
            <article>
            <ul className='content-info__list'>
                {
                resultProductList.items.map(detail => (
                <li key={detail.id}>
                    <Link to={`/items/${detail.id}`} className="___element a">
                    <img src={detail.picture} alt={detail.title} />
                    </Link>
                    <div className="___element b">
                    <h3>
                        {`$ ${detail.price.amount}` }
                        {detail.free_shipping ? <span className='free' title='Envio gratis'></span> : ""}
                    </h3>
                    <h2>
                        <Link to={`/items/${detail.id}`}>
                        {detail.title}
                        </Link>
                    </h2>
                    </div>
                    <div className="___element c">
                    {detail.condition}
                    </div>
                </li>
                ))
                }
            </ul>
            </article>
        </section>
        </>
    )
}