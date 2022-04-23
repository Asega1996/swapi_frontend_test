export const WITHOUT_ANY_ORDER = 0
export const ORDER_BY_CARGO_DES = 1
export const ORDER_BY_CARGO_ASC = 2
export const ORDER_BY_CREW_DES = 3
export const ORDER_BY_CREW_ASC = 4

export const AVAILABLE_FILTERS = [
    {
        name: 'starships:whitoutOrder',
        key: 'woOrder',
        value: WITHOUT_ANY_ORDER,
    },
    { name: 'starships:cargoDes', key: 'cargoDes', value: ORDER_BY_CARGO_DES },
    { name: 'starships:cargoAsc', key: 'cargoAsc', value: ORDER_BY_CARGO_ASC },
    { name: 'starships:crewDes', key: 'crewDes', value: ORDER_BY_CREW_DES },
    { name: 'starships:crewAsc', key: 'crewAsc', value: ORDER_BY_CREW_ASC },
]
