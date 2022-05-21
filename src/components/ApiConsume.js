import React from 'react';
import axios from 'axios';

import Results from './Results';
import Loading from './Loading';

export default class ApiConsume extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stateResults: [],
            isLoading: false
        }
    }

    // const [, updateState] = React.useState();
    // forceUpdate = React.useCallback(() => updateState({}), []);

    // mount
    componentDidMount() {
        this.forceUpdate();
        this.loadProductsFromServer();
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        clearInterval( this.props.apiUrl );
        console.log('componentWillUnmount')
    }

    loadProductsFromServer() {
        this.setState({ isLoading: true });

        axios.get(this.props.apiUrl)
        .then(res => {
            // console.log(res.data);
            this.setState({
                stateResults: res.data,
                isLoading: false
            })
        })
    }

    render(){
        if (!this.state.isLoading) {
            return (
                <Results case={this.props.case} results={this.state.stateResults} />
            )
        }
        return (
            <Loading />            
        )
    }
}