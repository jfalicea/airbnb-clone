import React from 'react';
import './Home.css'
import SearchBox from './SearchBox'
import Venue from './utility/Venue'
import axios from 'axios'
import Abode from './utility/Abode'
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cities: [],
      abodes: []
    };
  }
  async componentDidMount(){
    const recommededCities = axios.get(`${window.apiHost}/cities`)
    recommededCities.then((resp)=>{
      const cities = resp.data
      console.log('HOME.JS AXIOS', cities )
      this.setState({
        cities
      })
    })


    const axiosResponse = await axios.get(`${window.apiHost}/abodes`)
    const suggestedAbodes = axiosResponse.data.map((abode, i )=>{
      return(
        <div key={i}className="col s3"><Abode abode={abode}/></div>
      )
    })
    

    this.setState({
      abodes: suggestedAbodes
    })
    }


  
  render(){
    console.log("CITIES",this.state.cities)
    console.log("ABODE!",this.state.abode)
    return(<>
      <div className="contianer=fluid">
          <div className="row">
              <div className="home col s12 ">
                <div className="upper-fold">
                    <SearchBox />
                </div>
              </div>
          </div>
      </div>
      <div className="container"> 
        <div className="row">
          <div className="home col s12">
            <h3>Recommended for you</h3>
            <Venue cities={this.state.cities}/>
          </div>
        </div>
        <div className="row">
          <h3>Places to stay around the world...</h3>
          {this.state.abodes}
        </div>
      </div>
    </>)
  }
}
export default Home;