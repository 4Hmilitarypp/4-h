import * as React from 'react'
import styled from 'styled-components/macro'
import { IBackgroundCoords } from '../types'

const UnstyledDropdownBackground: React.FC<IBackgroundCoords> = props => (
  <div {...props}>
    <BackgroundArrow />
  </div>
)

const DropdownBackground = styled(UnstyledDropdownBackground)`
  position: absolute;
  background: ${props => props.theme.white};
  border-radius: 4px;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s, opacity 0.1s, transform 0.2s;
  display: flex;
  transform-origin: 50% 0;
  justify-content: center;
  z-index: ${coords => (coords.open ? 10 : -1)};
  opacity: ${coords => (coords.open ? 1 : 0)};
  width: ${coords => coords.width + 'px'};
  height: ${coords => coords.height + 'px'};
  transform: ${coords => `translate(${coords.left}px, ${coords.top}px)`};
`
const BackgroundArrow = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: block;
  background: ${props => props.theme.white};
  box-shadow: -3px -3px 5px rgba(82, 95, 127, 0.04);
  transform: translateY(-50%) rotate(45deg);
`

export default DropdownBackground
