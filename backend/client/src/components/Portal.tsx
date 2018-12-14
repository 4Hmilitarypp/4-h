import * as React from 'react'
import ReactDOM from 'react-dom'

interface IState {
  el?: HTMLDivElement
  portalRoot: HTMLElement | null
}
export default class Portal extends React.Component<{}, IState> {
  state = {
    el: document.createElement('div'),
    portalRoot: document.getElementById('portal'),
  }
  componentDidMount = () => {
    if (this.state.portalRoot && this.state.el) {
      this.state.portalRoot.appendChild(this.state.el)
    }
  }

  componentWillUnmount = () => {
    if (this.state.portalRoot && this.state.el) {
      this.state.portalRoot.removeChild(this.state.el)
    }
  }
  render() {
    const { children } = this.props
    return this.state.el ? ReactDOM.createPortal(children, this.state.el) : null
  }
}

/* const Portal: React.FC = ({ children }) => {
  const [portalRoot, setPortalRoot] = React.useState<HTMLElement | null>(null)
  const [portal, setPortal] = React.useState<HTMLDivElement | undefined>(undefined)
  React.useEffect(() => {
    setPortalRoot(document.getElementById('portal'))
    setPortal(document.createElement('div'))
    if (portalRoot && portal) {
      portalRoot.appendChild(portal)
    }
    return () => {
      if (portalRoot && portal) {
        portalRoot.removeChild(portal)
      }
    }
  })

  return portal ? ReactDOM.createPortal(children, portal) : null
}

export default Portal */
