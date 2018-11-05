import * as React from 'react'
import styled from 'styled-components/macro'
import Portal from './Portal'

interface IProps {
  on: boolean
  setOn: (on: boolean) => void
}

const Modal: React.SFC<IProps> = ({ children, on, setOn }) => {
  return (
    <Portal>
      {on && (
        <ModalWrapper>
          <ModalCard>
            <CloseButton onClick={() => setOn(false)}>X</CloseButton>
            <div>{children}</div>
          </ModalCard>
          <Background onClick={() => setOn(false)} />
        </ModalWrapper>
      )}
    </Portal>
  )
}

export default Modal

const ModalWrapper = styled.div`
  position: absolute;
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
  top: 0.7rem;
  right: 1rem;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${props => props.theme.white};
  cursor: pointer;
`