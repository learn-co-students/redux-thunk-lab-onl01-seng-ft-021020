// write your CatList component here
import React, { Component } from 'react'

export default class CatList extends Component {

  
 loadCats = () => {
  return this.props.catPics.map(cat=> <img key={cat.id} src={cat.url} alt='cat' width='300'></img> )
 }
 

  render() {
    return (
      <div>
        {this.props.loading? 'LOADING...': this.loadCats() }
      </div>
    )
  }
}
