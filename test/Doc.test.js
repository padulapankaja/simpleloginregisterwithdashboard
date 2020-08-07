const Doc = artifacts.require("Doc");

require('chai')
	.use(require('chai-as-promised'))
	.should()

contract('Doc', (accounts) => {
  let doc

  before(async () => {
  	doc = await Doc.deployed()
  })

  describe('deployment', async () => {
  	it('deploys successfully', async () => {
  		const address = doc.address
  		assert.notEqual(address, 0x0)
  		assert.notEqual(address, '')
  		assert.notEqual(address, null)
  		assert.notEqual(address, undefined)
   	})
  })

  describe('storage', async () => {
  	it('updates the DocHash', async () => {
  	  let docHash
  	  docHash = 'abc123'
  	  await doc.set(docHash)
  	  const result = await doc.get()
  	  assert.equal(result, docHash)
  	})
  })
})