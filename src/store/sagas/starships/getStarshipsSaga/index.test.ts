import { runSaga } from 'redux-saga'
import { getStarshipsSaga } from '.'
import * as starshipServiceModule from '@Services/api/starships'
import { starshipActions } from '@Store/actions/starships'

describe('getStarshipsSaga', () => {
    it('should call api and dispatch success action', async () => {
        const dummyStarshipsResponse = {
            totalElements: 1,
            data: [{ name: 'CR90 corvette' }],
        }
        const getAllStarshipsService = jest
            .spyOn(starshipServiceModule, 'getAllStarshipsService')
            .mockImplementation(() => Promise.resolve(dummyStarshipsResponse))

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getStarshipsSaga
        )

        expect(getAllStarshipsService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([
            starshipActions.fetchStarshipsDone({
                response: dummyStarshipsResponse,
            }),
        ])
        getAllStarshipsService.mockClear()
    })

    it('should call api and dispatch error action', async () => {
        const getAllStarshipsService = jest
            .spyOn(starshipServiceModule, 'getAllStarshipsService')
            .mockImplementation(() => Promise.reject())

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getStarshipsSaga
        )

        expect(getAllStarshipsService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([starshipActions.fetchStarshipsError()])
        getAllStarshipsService.mockClear()
    })
})
