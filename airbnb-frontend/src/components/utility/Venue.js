import React from 'react';
import BaseCard from './BaseCard'
import { Link } from 'react-router-dom'
import Slick from './Slick'
function Venue(props){
  //i've received an array called cities.  Map through it and make a BaseCard for each One. 
  const baseCards = props.cities.map((city, i)=>{
    return (<div className="col s3"key={i}>
      <Link to={`/city/${city.cityName}`}>
            <BaseCard city={city} />
      </Link>
    </div>)
  })


  const city = {image:"" ,cityName:"London" ,price:"99/month"}
  return(<>
      <div >
        <Slick elements={baseCards} />
      </div>
  </>)
}
export default Venue;