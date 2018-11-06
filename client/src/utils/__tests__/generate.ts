import generate from '../generate'

describe('generate.liaison', () => {
  it('should return a full liaison', () => {
    const res = generate.liaison()
    expect(res).toEqual({
      email: expect.any(String),
      name: expect.any(String),
      phoneNumber: expect.any(String),
      region: expect.any(String),
    })
  })
  it('should return a liaison with the given region', () => {
    const testRegion = 'Kansas'
    const res = generate.liaison({ region: testRegion })
    expect(res).toEqual({
      email: expect.any(String),
      name: expect.any(String),
      phoneNumber: expect.any(String),
      region: testRegion,
    })
  })
})

describe('generate.liaisons', () => {
  it('should return a liaison with the given region', () => {
    const res = generate.liaisons(2)
    expect(res.length).toBe(2)
    expect(res).toEqual(
      expect.arrayContaining([
        {
          email: expect.any(String),
          name: expect.any(String),
          phoneNumber: expect.any(String),
          region: expect.any(String),
        },
        {
          email: expect.any(String),
          name: expect.any(String),
          phoneNumber: expect.any(String),
          region: expect.any(String),
        },
      ])
    )
  })
})
