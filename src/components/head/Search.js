import React, { useState } from 'react';
import { generatePath, useNavigate, useSearchParams } from "react-router-dom";

export default function Search(props) {
  const [searchParams, setSearchParams] = useSearchParams()

  // data form
  const [dataForm, setData] = useState({
    query: ''
  })

  // var validation
  const [ validateError, setValidateError ] = useState('');
  
  // input change
  const handleInputChange = (event) => {
    setData({
        ...dataForm,
        [event.target.name] : event.target.value
    });  
  
    setValidateError('')
  }

  // navigate route
  const useNavigateParams = () => {
    const navigate = useNavigate();
  
    return (url, params) => {
      const path = generatePath(":url?:queryString", {
        url,
        queryString: params
      });
      navigate(path);
    };
  }

  const navigate = useNavigateParams()


  // submit from
  const submitData = (e) => {
    e.preventDefault();

    // validation
    if (dataForm.query.trim() === '' ) {
      setValidateError('Dinos qué deseas buscar.');
        return;
    }
    else {
      setValidateError('')
    }

    // send dates
    navigate("items",`search=${dataForm.query}`)
    props.setQuerySearch(dataForm.query)
  }


  return (
    <div className='search_box'>
      <form onSubmit={submitData}>
        <input 
          type="text" 
          name="query"
          placeholder="Nunca dejes de buscar"
          className='search_box__imput-search'
          onChange={handleInputChange} 
        ></input>
        <button type="submit" className='search_box__btn-search'>BUSCAR</button>
      </form>
      { validateError ? <p className='alert-validate'>{validateError}</p> : null }
    </div>
  )
}