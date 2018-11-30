// @ts-ignore
import Parser from 'html-react-parser'
import * as React from 'react'
import styled from 'styled-components/macro'
import { Button, SubHeading } from '../../../components/Elements'
import { IWebinar } from '../../../types'
import { elevation } from '../../../utils/mixins'

interface IProps {
  webinar: IWebinar
}

const Webinar: React.FC<IProps> = ({ webinar }) => {
  const { title, webinarLink, description } = webinar
  const descriptionRef = React.useRef<HTMLDivElement>(null)
  const [trimDescription, setTrimDescription] = React.useState(false)
  const [showExpand, setShowExpand] = React.useState(false)

  React.useEffect(() => {
    const descNode = descriptionRef.current
    if (descNode) {
      // des.length > 2000 is for jest to be able to test
      if (descNode.clientHeight > 160 || description.length > 2000) {
        setTrimDescription(true)
        setShowExpand(true)
      } else {
        setTrimDescription(false)
      }
    }
  }, [])

  const handleExpandClicked = () => {
    setTrimDescription(!trimDescription)
  }

  return (
    <WebinarWrapper>
      <WebinarTitle>
        <MySubHeading center={false} as="h3">
          {title}
        </MySubHeading>
        <ViewButton as="a" className="override" href={webinarLink}>
          View the Webinar
        </ViewButton>
      </WebinarTitle>
      <Description ref={descriptionRef} trim={trimDescription}>
        {Parser(description)}
      </Description>
      {showExpand && (
        <>
          <Ellipses>{trimDescription ? '. . .' : ''}</Ellipses>
          <Expand onClick={handleExpandClicked} show={showExpand} trim={trimDescription}>
            {trimDescription ? 'expand' : 'collapse'}
          </Expand>
        </>
      )}
    </WebinarWrapper>
  )
}
export default Webinar

const WebinarWrapper = styled.div`
  background: ${props => props.theme.inputGray};
  padding: 2rem 3rem;
  ${elevation(3)};
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`
const WebinarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 2.5rem;
`
const MySubHeading = styled(SubHeading)`
  padding: 0;
`
const ViewButton = styled(Button)`
  white-space: nowrap;
  margin: 0 -1rem 0 2rem;
  padding: 0.5rem 1.5rem;
  &.override {
    color: ${props => props.theme.white};
  }
  &.override:hover {
    opacity: 1;
  }
  &:hover {
    transform: none;
    background: #327654;
  }
`
const Description: any = styled.div`
  max-height: ${(props: any) => (props.trim ? '17rem' : 'unset')};
  overflow: hidden;
  position: relative;
`
const Ellipses = styled.span`
  display: block;
  color: ${props => props.theme.gray};
  text-align: center;
  font-size: 3rem;
  line-height: 0.5;
  padding-top: 0.5rem;
`
const Expand: any = styled.button`
  background: none;
  border: none;
  display: block;
  color: ${props => props.theme.secondary};
  font-weight: bold;
  margin: 1.5rem auto 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
