import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'
jest.mock('../../utils/api')
// import api from '../../utils/api'
import { ILiaison } from '../../types'
import generate from '../../utils/generate'
import staticLiaisons from '../../utils/staticLiaisons.json'
import FindLiaison, { filterLiaisons } from '../FindLiaison'

interface IProps {
  value: string
}

const setup = (propOverrides?: IProps) => {
  const props = Object.assign({}, propOverrides)

  const utils = render(<FindLiaison {...props} />)
  const input = utils.getByLabelText(/Enter a state or US Province/i)
  return {
    input,
    props,
    ...utils,
  }
}

describe('integration', () => {
  it('happy path', () => {
    const { input, getByText } = setup()
    const kansasLiaison = staticLiaisons.find(l => l.region === 'Kansas') as ILiaison
    fireEvent.change(input, { target: { value: 'ks' } })
    const kansasItem = getByText(kansasLiaison.region)
    fireEvent.click(kansasItem)
    expect(getByText(kansasLiaison.name as string)).toBeDefined()
  })
})

describe('filterLiaisons', () => {
  it('should return matching state names', () => {
    const fakeLiaisons = []
    const kansasLiaison = generate.liaison({ region: 'Kansas' })
    const newMexicoLiaison = generate.liaison({ region: 'New Mexico' })
    fakeLiaisons.push(kansasLiaison, newMexicoLiaison)

    let result = filterLiaisons(fakeLiaisons, 'Kansas')
    expect(result).toEqual([kansasLiaison])
    result = filterLiaisons(fakeLiaisons, 'New Mexico')
    expect(result).toEqual([newMexicoLiaison])
  })

  it('should return more than one if query is matching', () => {
    const fakeLiaisons = []
    const missouriLiaison = generate.liaison({ region: 'Missouri' })
    const mississippiLiaison = generate.liaison({ region: 'Mississippi' })
    const kentuckyLiaison = generate.liaison({ region: 'Kentucky' })
    fakeLiaisons.push(missouriLiaison, mississippiLiaison, kentuckyLiaison)

    let result = filterLiaisons(fakeLiaisons, 'M')
    expect(result).toEqual([missouriLiaison, mississippiLiaison])

    result = filterLiaisons(fakeLiaisons, 'Mi')
    expect(result).toEqual([missouriLiaison, mississippiLiaison])
  })

  it('should match abbreviation', () => {
    const fakeLiaisons = []
    const kansasLiaison = generate.liaison({ region: 'Kansas', abbreviation: 'KS' })
    const missouriLiaison = generate.liaison({ region: 'Missouri', abbreviation: 'MO' })
    const iowaLiaison = generate.liaison({ region: 'Iowa', abbreviation: 'IA' })
    fakeLiaisons.push(kansasLiaison, missouriLiaison, iowaLiaison)
    let result = filterLiaisons(fakeLiaisons, 'KS')
    expect(result).toEqual([kansasLiaison])
    result = filterLiaisons(fakeLiaisons, 'MO')
    expect(result).toEqual([missouriLiaison])
    result = filterLiaisons(fakeLiaisons, 'IA')
    expect(result).toEqual([iowaLiaison])
  })

  it('should not care about case', () => {
    const fakeLiaisons = []
    const kansasLiaison = generate.liaison({ region: 'Kansas' })
    const missouriLiaison = generate.liaison({ region: 'Missouri' })
    fakeLiaisons.push(kansasLiaison, missouriLiaison)
    const result = filterLiaisons(fakeLiaisons, 'kS')
    expect(result).toEqual([kansasLiaison])
  })

  it('should sort first by abbreviation', () => {
    const fakeLiaisons = []
    const californiaLiaison = generate.liaison({ region: 'California', abbreviation: 'CA' })
    const georgiaLiaison = generate.liaison({ region: 'Georgia', abbreviation: 'GA' })
    const iowaLiaison = generate.liaison({ region: 'Iowa', abbreviation: 'IA' })
    fakeLiaisons.push(californiaLiaison, georgiaLiaison, iowaLiaison)
    const result = filterLiaisons(fakeLiaisons, 'IA')
    expect(result[0]).toEqual(iowaLiaison)
  })
})
