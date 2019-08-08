import React from 'react'
import Data from '../data/countries.json';
import {Link} from 'react-router-dom';

function CountryList() {
  return (
      <div>
			 <p>waka waka</p>
            {Data.map((country)=>{
              return(
              	 <Link to={'/details/'+country.cca3}>{country.name.common}</Link>
             	)
            })
            }
      </div>
  )
}
export default CountryList;