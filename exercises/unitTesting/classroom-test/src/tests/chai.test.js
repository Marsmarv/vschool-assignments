const chai = require('chai')
const expect = chai.expect

describe("chai test run",() => {
  it('should compare some values', () => {
    expect('1').to.equal(1)
  })
})