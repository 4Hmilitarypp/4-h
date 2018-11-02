import * as React from 'react'
import styled from 'styled-components'
import { IBackgroundCoords, Omit } from '../types'

interface IProps {
  manageBackground: { setCoords: (coords: Omit<IBackgroundCoords, 'open'>) => void; setOpen: (open: boolean) => void }
  title: string
}

const UnstyledLinkGroup: React.SFC<IProps> = ({ children, manageBackground, title, ...rest }) => {
  const liRef = React.useRef<HTMLLIElement>()
  const dropdownRef = React.useRef<HTMLDivElement>()

  const handleClick = () => {
    manageBackground.setOpen(false)
    hideDropdownAndBackground()
  }

  const handleBlur = (e: any) => {
    if (!e.relatedTarget || e.relatedTarget.tabIndex === -1) {
      hideDropdownAndBackground()
      return
    }
    if (dropdownRef.current) {
      dropdownRef.current.focus()
      if (e.relatedTarget.tagName === 'SPAN' || e.relatedTarget.innerHTML === 'Sign In') {
        hideDropdownAndBackground()
      }
    }
  }

  const showDropDownAndBackground = () => {
    const liNode = liRef.current
    const dropdownNode = dropdownRef.current
    if (liNode) {
      liNode.classList.add('trigger-enter')

      setTimeout(() => liNode.classList.contains('trigger-enter') && liNode.classList.add('trigger-enter-active'), 150)
      manageBackground.setOpen(true)
    }
    if (dropdownNode) {
      const dropdownCoords = dropdownNode.getBoundingClientRect()
      const coords = {
        height: dropdownCoords.height,
        left: dropdownCoords.left,
        top: dropdownCoords.top,
        width: dropdownCoords.width,
      }

      manageBackground.setCoords(coords)
    }
  }
  const hideDropdownAndBackground = () => {
    if (liRef.current) {
      liRef.current.classList.remove('trigger-enter', 'trigger-enter-active')
    }
    manageBackground.setOpen(false)
  }
  return (
    <li
      {...rest}
      ref={liRef}
      onFocus={showDropDownAndBackground}
      onBlur={handleBlur}
      onClick={handleClick}
      onMouseEnter={showDropDownAndBackground}
      onMouseLeave={hideDropdownAndBackground}
    >
      <DropdownTitle tabIndex={0}>{title}</DropdownTitle>
      <Dropdown ref={dropdownRef as any}>{children}</Dropdown>
    </li>
  )
}

const DropdownTitle = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1.7rem;
  margin: 2rem 1rem;
  &:hover {
    cursor: default;
  }
`
const Dropdown = styled.div`
  opacity: 0;
  position: absolute;
  overflow: hidden;
  padding: 1.5rem 2rem;
  transform: translateY(6rem);
  border-radius: 2px;
  transition: all 0.5s;
  color: ${props => props.theme.gray};
  will-change: opacity;
  display: none;
  p {
    white-space: nowrap;
  }
`
const LinkGroup = styled(UnstyledLinkGroup)`
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 11;
  &.trigger-enter {
    ${Dropdown} {
      display: block;
    }
  }
  &.trigger-enter-active {
    ${Dropdown} {
      opacity: 1;
    }
  }
  &:hover {
    ${DropdownTitle} {
      opacity: 0.8;
    }
  }
`

export default LinkGroup
