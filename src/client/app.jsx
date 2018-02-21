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
            <div>
               "Hello World"
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
