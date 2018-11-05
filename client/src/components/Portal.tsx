import * as React from 'react'
import ReactDOM from 'react-dom'

const portalRoot = document.getElementById('portal')

export default class Portal extends React.Component<{}, {}> {
  el?: HTMLDivElement = undefined
  constructor(props: object) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount = () => {
    if (portalRoot && this.el) {
      portalRoot.appendChild(this.el)
    }
  }

  componentWillUnmount = () => {
    if (portalRoot && this.el) {
      portalRoot.removeChild(this.el)
    }
  }
  render() {
    const { children } = this.props
    return this.el ? ReactDOM.createPortal(children, this.el) : null
  }
}
