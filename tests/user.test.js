const mongoose = require("mongoose");
const request = require("supertest");
const server = require('../server/server');

require("dotenv").config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

describe("POST /api/login", () => {
    it("should return the user object", async () => {
        const res = await request(server).get("/api/login").send({
            username: 'eric',
            password: '123'
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toBe('eric');
        expect(res.body.password).toBe('123');
        expect(Array.isArray(res.body.notes)).toBe(true);
    });
});