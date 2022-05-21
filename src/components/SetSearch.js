import React from 'react'
import { useLocation } from 'react-router-dom'

import ApiConsume from './ApiConsume';

export default function SetSearch() {

  const sampleLocation = useLocation();
  // console.log(sampleLocation.search.split('=')[1])

  const limit = '4'
  const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q='+sampleLocation.search.split('=')[1]+'&&limit='+limit

  return (
    <ApiConsume apiUrl={apiUrl} case={'search'} />
  )
}
