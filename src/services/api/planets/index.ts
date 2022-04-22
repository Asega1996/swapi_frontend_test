import { api } from '..'
import { getDataFromNextUrl } from '../common'
import constants from '../constants'

const BLANKSPACE = ''

export const getListPlanetService = async (query: string = '') => {
    return await api.get(`/planets${query.length ? query : ''}`)
}

export const getAllPlanetsService = async () => {
    try {
        // First API call
        let response = await getListPlanetService()
        const planets = []

        // Get next planets
        while (response.data.next !== null) {
            planets.push(...response.data.results)
            response = await getDataFromNextUrl(
                response.data.next.replace(constants.API_BASE_URL, BLANKSPACE)
            )
        }
        // Push last iteration
        planets.push(...response.data.results)

        // Build Response
        return { totalElements: response.data.count, data: planets }
    } catch (e) {
        console.log(e)
        return {}
    }
}
