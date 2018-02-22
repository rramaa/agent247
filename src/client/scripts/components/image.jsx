import React, {Component} from 'react'

class ImgSection extends Component {
  render (){
    return (
      <div className={this.props.class1}>
        <span className={this.props.class2}></span>
      </div>
    )
  }
}

export default ImgSection