const Employee = require('../lib/Employee.js')


describe('Employee', () => {

    it("should be created", () => {
        const obj = new Employee()
        expect(typeof (obj)).toBe('object')
    })

    describe("getName", () => {
        it('should return name when called', () => {
            const name = "Test"
            const obj = new Employee(name)
            expect(obj.getName()).toBe(name)

        })
    });

    describe("getId", () => {
        it('should return id when called', () => {
            const id = "2"
            const obj = new Employee("Test", id)
            expect(obj.getId()).toBe(id)
        })

    });

    describe("getEmail", () => {
        it('should return email when called', () => {
            const email = "test@test.com"
            const id = "2"
            const obj = new Employee("Test", id, email)
            expect(obj.getId()).toBe(id)
        })

    });

    describe("getRole", () => {
        it('should return str when called', () => {
            const role = "Employee"
            const id = "2"
            const email = "test@test.com"
            const obj = new Employee("Test", id)
            expect(obj.getId()).toBe(id)
        })

    })


})

