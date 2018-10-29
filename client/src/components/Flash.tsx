import * as React from 'react'
import { Transition } from 'react-spring'
import styled from 'styled-components'

interface IProps {
  error?: string
  fixed?: boolean
  submitted: boolean
  successMessage?: string
  closeClicked: () => void
}

const Flash: React.SFC<IProps> = ({ successMessage: sm, error, submitted, fixed, closeClicked }) => {
  const successMessage = sm as string
  return (
    <>
      <Transition
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
        children={
          submitted && !error && successMessage.length > 0
            ? ({ opacity, height }) => (
                <ResponseSuccess
                  data-testid="create-success"
                  className={fixed ? 'fixed' : ''}
                  style={{ opacity, height }}
                >
                  <Message>{successMessage}</Message>
                </ResponseSuccess>
              )
            : false
        }
      />
      <Transition
        from={{ opacity: 0, height: 0 }}
        enter={{ opacity: 1, height: 'auto' }}
        leave={{ opacity: 0, height: 0 }}
        children={
          error
            ? ({ opacity, height }) => (
                <ResponseError data-testid="create-error" className={fixed ? 'fixed' : ''} style={{ opacity, height }}>
                  <Message className="message">{error}</Message>
                  <Close onClick={closeClicked}>X</Close>
                </ResponseError>
              )
            : false
        }
      />
    </>
  )
}
Flash.defaultProps = {
  error: undefined,
  fixed: false,
  successMessage: '',
}

export default Flash

const Message = styled.h3`
  color: white;
  font-size: 1.8rem;
  position: relative;
  text-align: center;
`

const Response = styled.div`
  position: fixed;
  padding: 2rem;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
`

const Close = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.black};
  font-size: 1.6rem;
  font-weight: 900;
  position: absolute;
  top: 5px;
  right: 7px;
  &:hover {
    cursor: pointer;
  }
`

const ResponseSuccess = styled(Response)`
  width: 100%;
  background: ${props => props.theme.green};
`
const ResponseError = styled(Response)`
  max-width: 80rem;
  margin: 0 auto;
  background: ${props => props.theme.white};
  max-width: 60rem;
  left: unset;
  right: unset;
  margin-top: 2rem;
  border-radius: 5px;
  border: 5px solid ${props => props.theme.warning};
  .message {
    color: ${props => props.theme.black};
    padding-right: 2rem;
  }
`
