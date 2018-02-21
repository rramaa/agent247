import React, { Component } from "react"
import { render } from "react-dom"
import localStorageService from "scripts/services/localStorageService"
import style from "style/style"
import configureStore from 'scripts/services/store'
import { Provider, connect } from 'react-redux'
import InputOptions from 'scripts/containers/InputOptions'
import MainContent from 'scripts/containers/MainContent'
import SellerHeader from 'scripts/containers/SellerHeader'

let store = configureStore()

class ToDo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="body-container">
                <SellerHeader />
                <MainContent />
                <InputOptions />
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
