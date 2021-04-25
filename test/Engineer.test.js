const Engineer = require("../lib/Engineer.js")

describe("Engineer", () => {
    it('should be instantiated', () => {
        const obj = new Engineer()
        expect(typeof(obj)).toBe('object')
    })

    
    describe("getGithub", () => {
        it('should return github id string when called', () => {
            const email = "test@test.com"
            const id = 2
            const github = "githubtest"
            const obj = new Engineer("Test", id, email, 0)
            expect(obj.getEmail()).toBe(email)
        })

    });

    describe("getRole", () => {
        it('should return job role string when called', () => {
            const id = 2
            const email = "test@test.com"
            const obj = new Engineer("Test", id, email)
            expect(obj.getRole()).toBe('Engineer')
        })

    })

    
})
