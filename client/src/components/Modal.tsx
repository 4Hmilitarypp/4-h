import * as React from 'react'
import styled from 'styled-components/macro'
import Icon from '../components/Icon'
import Portal from './Portal'

interface IProps {
  on: boolean
  setOn: (on: boolean) => void
}

const Modal: React.FC<IProps> = ({ children, on, setOn }) => {
  return (
    <Portal>
      {on && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={() => setOn(false)} data-testid="close-button">
              <Icon name="close" color="#ffffff" />
            </CloseButton>
            <div>{children}</div>
          </ModalCard>
          <Background onClick={() => setOn(false)} data-testid="background" />
        </ModalWrapper>
      )}
    </Portal>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  z-index: 2;
  min-width: 50rem;
  margin-bottom: 10rem;
`
const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`

const CloseButton = styled.button`
  position: absolute;
  top: 0.9rem;
  padding: 0;
  right: 1.2rem;
  border: none;
  background: transparent;
  fill: ${props => props.theme.white};
  width: 20px;
  height: 20px;
  cursor: pointer;
`
