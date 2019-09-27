import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HostHome.css';
import axios from 'axios'

class HostHome extends Component{
    state ={
        title: "", location:"", guests: "", price: "", details: "", img: "", amenities: ""
    }


    componentDidMount(){
        if(!this.props.auth.token){
            //if there is no token
            localStorage.setItem('preLoginPage', '/host/homes')
            this.props.history.push('/login')
        }
        var elems = document.querySelectorAll('select');
        var instances = window.M.FormSelect.init(elems);
    }

    changeTitle = (e)=>{
        console.log('title', e.target.value )
        this.setState({title: e.target.value})
    }
    changeLocation = (e)=>{
        console.log('location: ', e.target.value)
        this.setState({location: e.target.value})
    }
    changeNumGuests = (e)=>{
        console.log(e.target.value)
        this.setState({guests: e.target.value})
    }
    changePrice = (e)=>{this.setState({price: e.target.value})}
    changeDetails = (e)=>{
        console.log(e.target.value)
        this.setState({details: e.target.value})
    }
    changeImg = (e)=>{this.setState({img: e.target.value})}
    changeAmenities = (e)=>{this.setState({amenities: e.target.value})}

    submitForm= async (e)=>{
        e.preventDefault();
        const file = document.getElementById('location-image').files[0];
        const headerConfig = {
            headers:{
                'content-type': 'multipart/form-data'
            }
        }
        const data = new FormData(); //this creates a form with content-type: multipart/form-data this is a form data interface. must use if you send an img. this is helping with sending the HeadersConfig
        data.append('locationImage', file)
        for(let key in this.state){
            data.append(key,this.state[key])
        }
        
        ///FORM Validation!!!! 

        // dataToSend.token = this.props.auth.token;
        data.append("token", this.props.auth.token)
        const formURL = `${window.apiHost}/host/homes`
        const axiosResp = await axios.post(formURL,data,headerConfig)
        console.log(axiosResp.data)


     
    }

    render(){
        return(
            <div className="row host-home">
                <form onSubmit={this.submitForm} className="col s8 offset-s2">
                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="Listing Name" id="title" type="text" className="validate" value={this.state.title} onChange={this.changeTitle}/>
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="location" type="text" value={this.state.location} className="validate" onChange={this.changeLocation} />
                            <label htmlFor="location">Location</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <select value={this.state.guests} onChange={this.changeNumGuests}>
                            <option value="" disabled >Choose your option</option>
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guest</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="5">5 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="7">7 Guests</option>
                            <option value="8">8 Guests</option>
                            <option value="9">9 Guests</option>
                            </select>
                            <label># of guests</label>
                        </div>                    
                        <div className="input-field col s6">
                        <input id="price" className="validate" value={this.state.price} onChange={this.changePrice}/>
                        <label htmlFor="price">Price/night</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <textarea id="details" className="materialize-textarea" value={this.state.details} onChange={this.changeDetails}></textarea>
                        <label htmlFor="details">Details (be descriptive!)</label>
                    </div>
              </div>
              <div className="row">
                    <div className="input-field col s6">                           
                        <input id="location-image" type="file" onChange={this.changeImg} value={this.state.img}/>Upload image
                    </div>
                    <div className="input-field col s6">
                        <input id="amenties" type="text" onChange={this.changeAmenities} value={this.state.amenities} className="validate" />
                        <label htmlFor="amenities">Amenities</label>
                    </div>
                    <button className="submit-button">Submit</button>
                </div>
            </form>
          </div>
        )
    }
}


function mapStateToProp(state){
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProp)(HostHome);