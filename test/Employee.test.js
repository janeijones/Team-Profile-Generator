const Employee = require('../lib/Employee.js')
describe('Employee', () => {

        it("should be created", () => {
            const obj = new Employee()
            expect(typeof (obj)).toBe('object');
        })

})