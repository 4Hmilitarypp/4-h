import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading } from '../components/Elements'
import { ILiaison } from '../sharedTypes'
import api from '../utils/api'

const Liaisons: React.FC<RouteComponentProps> = () => {
  const [liaisons, setLiaisons] = React.useState<ILiaison[] | undefined>(undefined)

  React.useEffect(() => {
    api.liaisons
      .get()
      .then(l => setLiaisons(l))
      .catch(err => console.error(err))
  }, [])
  return (
    <LiaisonsContainer>
      <Heading>Liaisons</Heading>
      {liaisons && (
        <ul>
          {liaisons.map(l => (
            <li key={l.region}>{l.name}</li>
          ))}
        </ul>
      )}
    </LiaisonsContainer>
  )
}
export default Liaisons

const LiaisonsContainer = styled.div`
  padding: 2rem;
`
