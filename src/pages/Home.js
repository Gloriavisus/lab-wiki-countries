import React from 'react'
import CountryList from '../components/CountryList';
import Data from '../data/countries.json';

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <CountryList />
        </div>
    )
}
export default Home;