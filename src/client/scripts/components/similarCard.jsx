import React, {Component} from 'react'
import autobind from 'react-auto-bind'
import cs from 'classnames'

class SimilarCard extends Component {
  render (){
    return (
        <div className={this.props.className}>
            <div className="ta-c otp-title">Property Option {this.props.count}</div>
            <div className="propcard flexrow">
                <div className="img-wrap" style={{backgroundImage:'url('+this.props.imgurl+')'}}></div>
                <div className="prop-content">
                    <div><span className="title">{this.props.title}</span> in {this.props.location}</div>
                    <div className="ltxt">{this.props.locality}</div>
                    <div className="price">&#8377; {this.props.price}</div>
                </div>
            </div>
            <div className="btn-wrap flexrow">
                <span className="btn" onClick={this.props.onClick}><i className="fa fa-thumbs-down"></i> Nopes</span>
                <span className="btn" onClick={this.props.onClick}><i className="fa fa-heart-o"></i> Like</span>
            </div>
        </div>
    )
  }
}

class SimilarCardList extends Component{
    constructor(props) {
        super(props)
        this.state = {
            current: 1
        }
        autobind(this)
    }
    onClick() {
        this.setState((prevState) => {
            let next
            if (this.props.data.length === prevState.current) {
                this.props.changeStep(this.props.nextStep)
                next = this.props.data.length
            } else {
                next = prevState.current + 1
            }
            return {
                ...prevState,
                current: next
            }
        })
    }
    render() {
        return this.props.data.map((v, i) => {
            const isVisible = this.state.current - i === 1
            const className = cs("card", {
                'fadein': isVisible
            })
            return (
            <SimilarCard
                className={className}
                {...v}
                key={v.id}
                onClick={this.onClick}
                count={i+1}
            />)
        })
    }
}

export default SimilarCardList
