import React from 'react'
import CountryDetails from '../components/CountryDetails.js';
import {Link} from 'react-router-dom';
import Data from '../data/countries.json';

function Details(props) {
    return (
        <div>
            <hi>Details Page</hi>
            <CountryDetails countryCode={props.match.params.countryCode} />
            <Link to='/'>Return</Link>

            
        </div>
    )
}
export default Details;