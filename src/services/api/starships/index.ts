import { getDataFromNextUrl, getFirstApiCall } from '../common'
import constants from '../constants'

const BLANKSPACE = ''
const NAMESPACE = '/starships'

export const getAllStarshipsService = async () => {
    try {
        // First API call
        let response = await getFirstApiCall(NAMESPACE)
        const starships = []

        // Get next starships
        while (response.data.next !== null) {
            starships.push(...response.data.results)
            response = await getDataFromNextUrl(
                response.data.next.replace(constants.API_BASE_URL, BLANKSPACE)
            )
        }
        // Push last iteration
        starships.push(...response.data.results)

        // set an ID for each response item
        starships.forEach((el: any, index) => (el.id = index))

        // Build Response
        return { totalElements: response.data.count, data: starships }
    } catch (e) {
        console.log(e)
        throw 'unknwown_error'
    }
}
