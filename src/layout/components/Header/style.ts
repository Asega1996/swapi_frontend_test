import { Container, IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const WrapperContainerHeader = styled(Container)`
    padding: 0rem 2rem;
`

export const LogoComponent = styled.img`
    width: 100%;
    height: auto;
    cursor: pointer;
    max-width: 100px;
    padding: 10px 0px;
`

export const IconButtonHeader = styled(IconButton)`
    color: white;
    float: right;
`

export const CustomNavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`
