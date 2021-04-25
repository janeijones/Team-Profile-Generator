const Intern = require("../lib/Intern.js")
describe("Intern", () => {
    it('should be able to be instanciated', () => {
        const obj = new Intern()
        expect(typeof(obj)).toBe('object')
    })
    describe("getSchool",()=> {
        it("should return school string", () =>{
            const school = "Test School";
            const obj = new Intern("Test Name", 3, "Test Email", school)
            expect(obj.school).toBe(school)
        })
    })
    describe("getRole",()=> {
        it("should return the intern role string", () =>{
            const school = "Test School"
            const obj = new Intern("Test Name", 3, "Test Email", school)
            expect(obj.getRole()).toBe("Intern")
        })
    });
    
})