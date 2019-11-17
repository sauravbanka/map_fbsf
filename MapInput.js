import React, { Component } from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

class MapInput extends Component{
  render(){
    return(
      <GooglePlacesAutocomplete
         placeholder="search"
         minLength = {2}
         autoFocus = {true}
         returnKeyType={'search'}
         listViewDisplayed={false}
         fetchDetails = {true}
         onPress={(data, details = null)=>{
           this.props.notifyChange(details.geometry.location);
         }
         query={
           {
             key: '',
             language:'en'
           }
         }
         nearbyPlacesAPI='GooglePlacesSearch'
         debounce={200}
      />
    )
  }
}

export default MapInput;
