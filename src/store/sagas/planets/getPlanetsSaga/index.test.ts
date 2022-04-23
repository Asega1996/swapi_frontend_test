import { runSaga } from 'redux-saga'
import { getPlanetsSaga } from '.'
import * as planetServiceModule from '@Services/api/planets'
import { planetActions } from '@Store/actions/planets'

describe('getPlanetsSaga', () => {
    it('should call api and dispatch success action', async () => {
        const dummyPlanetsResponse = {
            totalElements: 1,
            data: [{ name: 'Alderaan' }],
        }
        const getAllPlanetsService = jest
            .spyOn(planetServiceModule, 'getAllPlanetsService')
            .mockImplementation(() => Promise.resolve(dummyPlanetsResponse))

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getPlanetsSaga
        )

        expect(getAllPlanetsService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([
            planetActions.fetchPlanetsDone({ response: dummyPlanetsResponse }),
        ])
        getAllPlanetsService.mockClear()
    })

    it('should call api and dispatch error action', async () => {
        const getAllPlanetsService = jest
            .spyOn(planetServiceModule, 'getAllPlanetsService')
            .mockImplementation(() => Promise.reject())

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getPlanetsSaga
        )

        expect(getAllPlanetsService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([planetActions.fetchPlanetsError()])
        getAllPlanetsService.mockClear()
    })
})
