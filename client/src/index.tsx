import * as React from 'react'
import * as ReactDOM from 'react-dom'
import restApi from 'utils/api'
import App from './App'
import './styles/index.css'
import './styles/reset.css'
// import registerServiceWorker from './registerServicesWorker'

restApi.init()
ReactDOM.render(<App />, document.getElementById('root'))
// registerServiceWorker()
