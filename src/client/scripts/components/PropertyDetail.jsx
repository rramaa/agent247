import React, {Component} from 'react'

class PropertyDetail extends Component {
  render() {
    return (
      <iframe className="proj-dtl-frame" src={this.props.url} style={{width:'100%', height:'100%'}} />
    )
  }
}

export default PropertyDetail