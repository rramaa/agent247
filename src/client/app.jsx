import React, { Component } from "react"
import { render } from "react-dom"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"
import configureStore from 'scripts/services/store'
import { Provider, connect } from 'react-redux'

let store = configureStore()

class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="body-container">

                {/* Seller information details starts */}
                <div class="sllr-info-wrap">
                    <div className="sllr-head speak">
                        <i className="fa fa-volume-up"></i>
                        <div className="sllr-img-wrap"></div>
                    </div>
                    <div className="sllr-name">John Mathewz</div>
                    <div className="sllr-loc">Rai Realtors, Gurgaon</div>
                </div>
                {/* Seller information details ends */}

                {/* Seller's Contextual Statements starts */}
                <div className="sllr-statement-wrap">
                    <div className="statement">Hi Mark, Sorry couldn't pick up your call.</div>
                    <div className="statement">I saw that you have shown interest for rent in DLF Park Place.</div>
                    <div className="statement">
                        <div className="card propcard">
                            <div><span className="title">4 BHK Apartment</span> in DLF Park Place</div>
                            <div class="ltxt">Sector 54, Gurgaon</div>
                        </div>
                    </div>
                    <div className="statement">How may I further assist you today?</div>
                </div>
                {/* Seller's Contextual Statements ends */}

                {/* Buyer options starts */}
                <div className="options-wrap">
                    <div className="btn mb10">Know more on the property</div>
                    <div className="btn mb10">Know more about DLF Park Place</div>
                    <div className="btn mb10">When can I visit the property?</div>
                </div>
                {/* Buyer options ends */}
            </div>
        )
    }
}

const App = (
    <Provider store={store}>
        <ToDo />
    </Provider>
)
export default App
