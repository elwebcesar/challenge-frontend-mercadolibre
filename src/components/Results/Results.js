import React from 'react';

import '../../sass/_Results.scss'
import '../../sass/_Buttons.scss'
import '../../sass/_Breadcrumb.scss'

import { ResultSearch } from './ResultSearch';
import { ResultItem } from './ResultItem';
import { ResultDescription } from './ResultDescription';
import { ResultCategory } from './ResultCategory';
import Loading from '../Loading';


export default function Results(props) {
  if ( Object.entries(props.results).length > 0) {

    // case consult
    if( props.case === 'search') {
      return <ResultSearch results={props.results} />
    }
    else if( props.case === 'item') {
      return <ResultItem results={props.results} />
    }
    else if( props.case === 'description') {
      return <ResultDescription results={props.results} />
    }
    else if( props.case === 'category') {
      return <ResultCategory results={props.results} />
    }
  }
  else {
    return  <Loading />
  }
}
