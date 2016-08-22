import axios from 'axios'
import AppDispatcher from './AppDispatcher'

const API ={
  lookUp(search){
    console.log("inside lookup");
    axios.get(`api/search/${search}`)
    .then(response =>{
      //let lookupData = 
      return response.data;
    })
    .then(results =>{
      AppDispatcher.dispatch({
        type:'RECEIVE_RESULTS',
        results
      })
    })
    .catch(err =>console.log(err));
  }

}

export default API;