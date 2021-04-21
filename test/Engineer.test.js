const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    it('should be instantiated', () => {
        const obj = new Engineer()
        expect(typeof(obj)).toBe('object')
    })
    
})
