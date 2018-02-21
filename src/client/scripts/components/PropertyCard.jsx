import React, {Component} from 'react'

class PropertyCard extends Component {
  render (){
    return (
      <div className="card propcard">
        <div><span className="title">{this.props.title}</span> in {this.props.location}</div>
        <div className="ltxt">{this.props.locality}</div>
      </div>
    )
  }
}

export default PropertyCard