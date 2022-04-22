import { Avatar } from '@mui/material'
import styled from 'styled-components'
import { CustomFlagType } from './types'

export const SCFlag = styled(Avatar)<CustomFlagType>`
    border: ${(props) =>
        props.selected ? `solid 2px ${props.color}` : 'inherit'};
`
