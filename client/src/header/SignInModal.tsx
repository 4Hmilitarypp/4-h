import * as React from 'react'
import styled from 'styled-components/macro'
import { Button, InputGroup } from '../components/Elements'
import Modal from '../components/Modal'

const SignInModal: React.SFC = ({ children }) => {
  const [on, setOn] = React.useState<boolean>(false)

  return (
    <>
      <Button onClick={() => setOn(true)}>{children}</Button>
      <Modal on={on} setOn={setOn}>
        <Header>
          <Heading>Enter your email and password</Heading>
        </Header>
        <Content>
          <InputGroup>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </InputGroup>
        </Content>
      </Modal>
    </>
  )
}

export default SignInModal

const Header = styled.div`
  background: ${props => props.theme.gray};
  padding: 0.7rem 2rem;
`
const Heading = styled.h2`
  text-align: center;
  color: ${props => props.theme.white};
  font-size: 2.2rem;
`
const Content = styled.div`
  padding: 1.5rem;
`
