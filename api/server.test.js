const request = require("supertest");
const server = require("./server");
const db = require("../data/dbConfig");

// beforeAll(async () => {
//     await db.migrate.rollback()
//     await db.migrate.latest()
//   })
//   beforeEach(async () => {
//     await db('users').truncate()
//   })
//   afterAll(async () => {
//     await db.destroy()
//   })

describe('endpoints', () => {
    describe('[GET] /users', () => {
        it ('responds with 200', async () => {
            const res = await request(server).get('/users')
            expect(res.status).toBe(200)
        })
    })
})