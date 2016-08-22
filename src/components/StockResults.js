import React, { Component } from 'react'
import SearchActions from '../actions/SearchActions'
import StockList from './StockList'
import SearchStore from '../stores/SearchStore'

export default class StockResults extends Component{
  constructor(){
    super();
    this.state ={
      results:SearchStore.getAll()
    }
  }

  render(){


   
      return(
      <table className='table'>
       <thead>
         <tr>
           <th></th>
           <th>Name</th>
           <th>Price</th>
         </tr>
       </thead>
       <tbody>
       </tbody>
     </table>
    )
  }
}