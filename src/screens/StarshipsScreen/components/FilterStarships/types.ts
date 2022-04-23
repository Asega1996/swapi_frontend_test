import React from 'react'

export type FilterStarshipsProps = {
    setInputFilter: React.Dispatch<React.SetStateAction<string>>
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setOrdenationFilter: React.Dispatch<React.SetStateAction<any>>
}
