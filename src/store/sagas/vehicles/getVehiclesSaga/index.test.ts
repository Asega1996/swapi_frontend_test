import { runSaga } from 'redux-saga'
import { getVehiclesSaga } from '.'
import * as starshipServiceModule from '@Services/api/vehicles'
import { vehiclesActions } from '@Store/actions/vehicles'

describe('getVehiclesSaga', () => {
    it('should call api and dispatch success action', async () => {
        const dummyVehiclesResponse = {
            totalElements: 1,
            data: [{ name: 'CR90 corvette' }],
        }
        const getAllVehiclesService = jest
            .spyOn(starshipServiceModule, 'getAllVehiclesService')
            .mockImplementation(() => Promise.resolve(dummyVehiclesResponse))

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getVehiclesSaga
        )

        expect(getAllVehiclesService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([
            vehiclesActions.fetchVehiclesDone({
                response: dummyVehiclesResponse,
            }),
        ])
        getAllVehiclesService.mockClear()
    })

    it('should call api and dispatch error action', async () => {
        const getAllVehiclesService = jest
            .spyOn(starshipServiceModule, 'getAllVehiclesService')
            .mockImplementation(() => Promise.reject())

        const dispatched: any[] = []
        await runSaga(
            {
                dispatch: (action) => dispatched.push(action),
            },
            getVehiclesSaga
        )

        expect(getAllVehiclesService).toHaveBeenCalledTimes(1)
        expect(dispatched).toEqual([vehiclesActions.fetchVehiclesError()])
        getAllVehiclesService.mockClear()
    })
})
