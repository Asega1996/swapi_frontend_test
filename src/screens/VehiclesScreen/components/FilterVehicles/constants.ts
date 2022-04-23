export const WITHOUT_ANY_ORDER = 0
export const ORDER_BY_CARGO_DES = 1
export const ORDER_BY_CARGO_ASC = 2
export const ORDER_BY_CREW_DES = 3
export const ORDER_BY_CREW_ASC = 4

export const AVAILABLE_FILTERS = [
    {
        name: 'common:whitoutOrder',
        key: 'woOrder',
        value: WITHOUT_ANY_ORDER,
    },
    { name: 'common:cargoAsc', key: 'cargoDes', value: ORDER_BY_CARGO_DES },
    { name: 'common:cargoAsc', key: 'cargoAsc', value: ORDER_BY_CARGO_ASC },
    { name: 'common:crewDes', key: 'crewDes', value: ORDER_BY_CREW_DES },
    { name: 'common:crewAsc', key: 'crewAsc', value: ORDER_BY_CREW_ASC },
]
