import React, {Component} from 'react'

class CatList extends Component {
    
    renderCatPics(){
        return this.props.catPics.map(catPic => {
            console.log(catPic)
            return <img src={catPic.url} alt={catPic.id} />
        })
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                {this.renderCatPics()}
            </div>
        )
    }
}

export default CatList