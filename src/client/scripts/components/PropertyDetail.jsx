import React, {Component} from 'react'

class PropertyDetail extends Component {
  render() {
    return (
      <iframe src={this.props.url} />
    )
  }
}

export default PropertyDetail