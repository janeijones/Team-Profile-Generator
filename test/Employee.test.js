const Employee = require('../lib/Employee.js')


describe('Employee', () => {

    it("should be instantiated", () => {
        const obj = new Employee()
        expect(typeof (obj)).toBe('object')
    })

    describe("getName", () => {
        it('should return name string when called', () => {
            const name = "Test"
            const obj = new Employee(name)
            expect(obj.getName()).toBe(name)

        })
    });

    describe("getId", () => {
        it('should return id number when called', () => {
            const id = 2
            const obj = new Employee("Test", id)
            expect(obj.getId()).toBe(id)
        })

    });

    describe("getEmail", () => {
        it('should return email string when called', () => {
            const email = "test@test.com"
            const id = 2
            const obj = new Employee("Test", id, email)
            expect(obj.getEmail()).toBe(email)
        })

    });

    describe("getRole", () => {
        it('should return stringwhen called', () => {
            const role = "Employee"
            const id = 2
            const email = "test@test.com"
            const obj = new Employee("Test", id, email)
            expect(obj.getRole()).toBe('Employee')
        })

    })


})

