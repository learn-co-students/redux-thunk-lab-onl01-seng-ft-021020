import React from 'react'

const CatList = (props) => {
  return (
    <React.Fragment>
      {props.catPics.map(cat => <img src={cat.url} alt={cat.id} />)}
    </React.Fragment>
  )
}

export default CatList
