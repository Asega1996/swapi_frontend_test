import { getDataFromNextUrl, getFirstApiCall } from '../common'
import constants from '../constants'

const BLANKSPACE = ''
const NAMESPACE = '/planets'

export const getAllPlanetsService = async () => {
    try {
        // First API call
        let response = await getFirstApiCall(NAMESPACE)
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
        throw 'unknwown_error'
    }
}
