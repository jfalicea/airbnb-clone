import React from 'react';
import './FullAbode.css'
import axios from 'axios'
class FullAbode extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cities: [],
      abodes: []
    };
  }
  async componentDidMount(){
      const abodeId = this.props.match.params.abodeId
      const axiosResponse = await axios.get(`${window.apiHost}/abode/${abodeId}`)
        this.setState({
            abodes: axiosResponse.data
        })
  }

  render(){
      console.log('abode!!! state',this.state.abodes )
      const abode = this.state.abodes
    return(<>
          <div className="fullAbode col s12">
            <img src={`${window.apiHost}${abode.imageURL}`} />
            <div className="location">{abode.location}</div>
            <div className="title">{abode.title}</div>
            <div className="price">{abode.price}</div>
            <div className="guest">{abode.guests}</div>
            <div className="details">{abode.details}</div>
            <div className="amenities">{abode.amenities}</div>
        </div>
    </>)
  }
}
export default FullAbode;