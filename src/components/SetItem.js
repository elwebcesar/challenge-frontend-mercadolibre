import React from 'react'
import { useParams } from 'react-router-dom'

import ApiConsume from './ApiConsume';

export default function SetItem() {

  let params = useParams();

  const apiUrl = 'https://api.mercadolibre.com/items/'+params.id

  return (
    <ApiConsume apiUrl={apiUrl} case={'item'} />
  )
}
