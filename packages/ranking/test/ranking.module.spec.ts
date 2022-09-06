import { RankingModule } from '../src'

describe('Ranking Module Test Suite', () => {

    test('Instance should exist', () => {
        const sut = new RankingModule()
        const { clanRanking, playerRanking } = sut
        expect(clanRanking).toBeDefined()
        expect(playerRanking).toBeDefined()
    })
})