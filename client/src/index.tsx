import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './assets/styles/index.css'
import './assets/styles/reset.css'
import restApi from './utils/api'
// import registerServiceWorker from './registerServicesWorker'

restApi.init()
;(ReactDOM as any).createRoot(document.getElementById('root')).render(<App />)
// registerServiceWorker()
