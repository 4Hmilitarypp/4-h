import { RouteComponentProps } from '@reach/router'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Heading } from '../../components/Elements'
import { ILiaison } from '../../sharedTypes'
import api from '../../utils/api'
import Liaison from './Liaison'

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
      <LiaisonHeading>Liaisons</LiaisonHeading>
      {liaisons && (
        <ul>
          {liaisons.map(l => (
            <Liaison key={l.region} liaison={l} />
          ))}
        </ul>
      )}
    </LiaisonsContainer>
  )
}
export default Liaisons

const LiaisonsContainer = styled.div``
const LiaisonHeading = styled(Heading)`
  padding-left: 4rem;
  padding-bottom: 4rem;
`
