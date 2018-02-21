import React, {Component} from 'react'

class SimilarCard extends Component {
  render (){
    return (
      <div className="card">
        <div className="propcard flexrow">
            <div className="img-wrap" style={{backgroundImage:'url('+this.props.imgurl+')'}}></div>
            <div className="prop-content">
            <div><span className="title">{this.props.title}</span> in {this.props.location}</div>
            <div className="ltxt">{this.props.locality}</div>
            <div className="price">&#8377; {this.props.price}</div>
            </div>
        </div>
        <div className="btn-wrap flexrow">

        </div>
    </div>
    )
  }
}

export default PropertyCard