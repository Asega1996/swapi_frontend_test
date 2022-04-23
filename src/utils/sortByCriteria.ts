import {
    ORDER_BY_CARGO_ASC,
    ORDER_BY_CARGO_DES,
    ORDER_BY_CREW_ASC,
    ORDER_BY_CREW_DES,
    WITHOUT_ANY_ORDER,
} from '@Screens/StarshipsScreen/components/FilterStarships/constants'
import { pipe } from 'ramda'

const transformUnknownToZero = (val: any) => {
    return val.toLowerCase() === ('unknown' || 'none') ? 0 : val
}

const deleteCommas = (val: any) => {
    return val.replaceAll(',', '')
}

export const sortByCriteria = (arrayToSort: any[], sortCriteria: number) => {
    switch (sortCriteria) {
        case WITHOUT_ANY_ORDER:
            return arrayToSort.sort(
                (item1: any, item2: any) => item1.id - item2.id
            )
        case ORDER_BY_CARGO_DES:
            return arrayToSort.sort(
                (item1: any, item2: any) =>
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item1.cargo_capacity) -
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item2.cargo_capacity)
            )
        case ORDER_BY_CARGO_ASC:
            return arrayToSort.sort(
                (item1: any, item2: any) =>
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item2.cargo_capacity) -
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item1.cargo_capacity)
            )
        case ORDER_BY_CREW_DES:
            return arrayToSort.sort(
                (item1: any, item2: any) =>
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item1.crew) -
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item2.crew)
            )
        case ORDER_BY_CREW_ASC:
            return arrayToSort.sort(
                (item1: any, item2: any) =>
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item2.crew) -
                    pipe(
                        deleteCommas,
                        transformUnknownToZero,
                        Number.parseInt
                    )(item1.crew)
            )
        default:
            return arrayToSort.sort(
                (item1: any, item2: any) => item1.id - item2.id
            )
    }
}
