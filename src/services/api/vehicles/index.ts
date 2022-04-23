import { getDataFromNextUrl, getFirstApiCall } from '../common'
import constants from '../constants'

const BLANKSPACE = ''
const NAMESPACE = '/vehicles'

export const getAllVehiclesService = async () => {
    try {
        // First API call
        let response = await getFirstApiCall(NAMESPACE)
        const vehicles = []

        // Get next vehicles
        while (response.data.next !== null) {
            vehicles.push(...response.data.results)
            response = await getDataFromNextUrl(
                response.data.next.replace(constants.API_BASE_URL, BLANKSPACE)
            )
        }
        // Push last iteration
        vehicles.push(...response.data.results)

        // set an ID for each response item
        vehicles.forEach((el: any, index) => (el.id = index))

        // Build Response
        return { totalElements: response.data.count, data: vehicles }
    } catch (e) {
        console.log(e)
        throw 'unknwown_error'
    }
}
