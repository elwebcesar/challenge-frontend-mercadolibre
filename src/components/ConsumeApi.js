import React, { useState, useEffect }  from 'react';
import axios from 'axios';

import Results from './Results/Results';
import Loading from './Loading';

export const ConsumeApi = (props) => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dataConsults, setDataConsults] = useState([]);


    const getData = async() => {
        let isMounted = true;
        const source = axios.CancelToken.source();

        const fetchData = async (url) => {
            setIsLoaded(true);
            try {
                const response = await axios.get(url, {
                    cancelToken: source.token
                });
                if (isMounted) {
                    setDataConsults(response.data);
                    setError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setDataConsults([]);
                }
            } finally {
                isMounted && setIsLoaded(true);
            }
        }

        fetchData(props.url_api);

        const cleanUp = () => {
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }


    useEffect(() => {
        getData()
        setIsLoaded(false)
    }, [props.url_api])
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <Loading />;
    }
    else {
        return <Results case={props.case} results={dataConsults} />
    }
}