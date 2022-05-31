import React from 'react'
import { useParams } from 'react-router-dom'

import { ConsumeApi } from './ConsumeApi';

export default function SetItem() {

  let params = useParams();
  const apiUrl = 'https://api.mercadolibre.com/items/'+params.id

  return <ConsumeApi url_api={apiUrl} case={'item'} />
}
