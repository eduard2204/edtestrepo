describe("Ура! Наш первый автотест", function() {
    it("Тест 1.1", function() {
      expect(1 + 1).toBe(2)
    })
  })

  const request = require('supertest')
const agent = request('https://reqres.in/api')


describe("Тест 2 - ну что-нибудь посложнее", function() {
  it("Тест 2.1", function(done) {
    agent
     .get('/user')
     .expect('Content-Type', /json/)
     .expect(200, done)
  })
})