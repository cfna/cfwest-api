import { HttpClient } from '../../src'

describe('HttpClient test suite', () => {

    test('Instance should exist', () => {
        const sut = new HttpClient()
        expect(sut).toBeDefined()
    })
})