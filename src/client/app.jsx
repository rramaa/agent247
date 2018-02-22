import React, { Component } from "react"
import { render } from "react-dom"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"
import configureStore from 'scripts/services/store'
import { Provider, connect } from 'react-redux'
import InputOptions from 'scripts/containers/InputOptions'
import MainContent from 'scripts/containers/MainContent'
import SellerHeader from 'scripts/containers/SellerHeader'
import Popup from 'scripts/containers/Popup'

let store = configureStore()

class MyApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="body-container">
                <SellerHeader />
                <MainContent />
                <InputOptions />
                <Popup />
            </div>
        )
    }
}

const App = (
    <Provider store={store}>
        <MyApp />
    </Provider>
)
export default App
