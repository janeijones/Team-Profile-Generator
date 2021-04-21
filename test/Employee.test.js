const { it } = require('@jest/globals');
const Employee = require('../lib/Employee.js')


describe('Employee', () => {

        it("should be created", () => {
            const obj = new Employee()
            expect(typeof (obj)).toBe('object')
        })

})

describe('name', () => {
    it('should be created accepting a string argument', () => {
        const name = "Janei"
        const obj = new Employee(name)
        expect(obj.name).toBe(name)
    })

    it('should return name when called', () => {
        const name = "Janei"
        const obj = new Employee(name)
        expect(obj.getName()).toBe(name)
    })
})

