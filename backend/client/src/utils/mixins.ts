export function transition({ name, time = 0.2, prop = 'all' }: { name: string; time?: number; prop?: string }) {
  switch (name) {
    case 'easeOutQuart':
      return `transition: ${prop} ${time}s cubic-bezier(.165, .84, .44, 1)`

    case 'easeInQuart':
      return `transition:${prop} ${time}s cubic-bezier(.895, .03, .685, .22)`

    case 'easeInCubic':
      return `transition: ${prop} ${time}s cubic-bezier(.55, .055, .675, .19)`

    case 'easeOutCubic':
      return `transition: ${prop} ${time}s cubic-bezier(.215, .61, .355, 1)`

    default:
      return ''
  }
}

export function elevation(level: number) {
  switch (level) {
    case 0:
      return 'box-shadow: inset 0 7px 9px -7px rgba(0, 0, 0, .7)'
    case 1:
      return 'box-shadow: 0 3px 10px 3px rgba(0,0,0,.2)'
    case 2:
      return 'box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24)'
    case 3:
      return 'box-shadow: 0 4px 6px rgba(69, 50, 93, .11), 0 1px 3px rgba(0, 0, 0, .08)'
    case 4:
      return 'box-shadow: 0 15px 35px rgba(69, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07)'
    case 5:
      return 'box-shadow: 0px 8px 10px rgba(0, 0, 0, .15), 0px 8px 25px rgba(0, 0, 0, .1)'
    case 6:
      return 'box-shadow: 0 19px 38px rgba(0, 0, 0, .3), 0 15px 12px rgba(0, 0, 0, .22)'
    default:
      return ''
  }
}

export const hoveredRow = () => `
&:hover {
  cursor: pointer;
}
&:after {
  content: '';
  position: absolute;
  ${transition({ prop: 'opacity', time: 0.1, name: 'easeOutQuart' })};
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 5px;
  ${elevation(1)};
}
&:hover::after {
  ${transition({ prop: 'opacity', time: 0.1, name: 'easeInCubic' })};
  opacity: 1;
}
`

const sizes = {
  desktop: 1200,
  phone: 500,
  tabletLand: 900,
  tabletPort: 750,
}

// Iterate through the sizes and create a media template
export const media: any = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args: string[]) => `
    @media (max-width: ${sizes[label]}px) {${args}
  }
  `
  return acc
}, {})
