import { useLocation } from 'react-router-dom'
import { ConsumeApi } from './ConsumeApi';


export default function SetSearch(props) {

  const limit = '4'
  const apiBase = 'https://api.mercadolibre.com/sites/MLA/search?q='

  const sampleLocation = useLocation();
  
  let apiUrl

  props.querySearch ? (
    apiUrl =  `${apiBase}${props.querySearch}&&limit=${limit}`
  ) : (
    apiUrl = `${apiBase}${sampleLocation.search.split('=')[1]}&&limit=${limit}`
  );

  return <ConsumeApi url_api={apiUrl} case={'search'} />
}