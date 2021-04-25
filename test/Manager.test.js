const Manager = require("../lib/Manager.js")
describe("Manager", () => {
    it('should be able to be instanciated', () => {
        const obj = new Manager()
        expect(typeof(obj)).toBe('object')
    })
   
    
})