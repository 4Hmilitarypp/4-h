import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { ILiaison } from './sharedTypes'
import api from './utils/api'

const Home: React.FC<RouteComponentProps> = () => {
  const [liaisons, setLiaisons] = React.useState<ILiaison[] | undefined>(undefined)

  React.useEffect(() => {
    api.liaisons
      .get()
      .then(l => setLiaisons(l))
      .catch(err => console.error(err))
  }, [])

  return (
    <HomeContainer>
      <Text>Created by Alex Wendte</Text>
      {liaisons && (
        <ul>
          {liaisons.map(l => (
            <li key={l.region}>{l.name}</li>
          ))}
        </ul>
      )}
    </HomeContainer>
  )
}
export default Home

const HomeContainer = styled.div`
  padding: 1rem;
`

const Text = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
