import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

import '../../sass/_HeaderDoom.scss'

export default function HeaderDoom(props) {
  return (
    <header className='header-doom full'>
      <div className='wrap flex'>
        <Link to={"/"}>
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png"
            alt="Mercado Libre"
          />
        </Link>
        <Search setQuerySearch={props.setQuerySearch} />
      </div>
    </header>
  )
}
