const Manager = require("../lib/Manager.js")
describe("Manager", () => {
    it('should be able to be instanciated', () => {
        const obj = new Manager()
        expect(typeof(obj)).toBe('object')
    })
    describe("getNumber", () => {
        it("should return the office number string", () =>{
            const officeNumber = "8175557854";
            const obj = new Manager("Test Name", 1, "Test Email", officeNumber)
            expect(obj.getNumber()).toBe(officeNumber)
        })
    })
    describe("getRole",()=> {
        it("should return the manager string", () =>{
            const officeNumber = "8175557854"
            const obj = new Manager("Test Name", 1,"Test Email", officeNumber)
            expect(obj.getRole()).toBe("Manager")
        })
    });
    
})