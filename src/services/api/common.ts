import { api } from '.'

export const getDataFromNextUrl = async (urlNextPage: string) => {
    return await api.get(urlNextPage)
}

export const getFirstApiCall = async (
    namespace: string,
    query: string = ''
) => {
    return await api.get(`${namespace}/${query.length ? query : ''}`)
}
