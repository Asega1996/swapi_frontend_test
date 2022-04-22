import RocketIcon from '@mui/icons-material/Rocket'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import PublicIcon from '@mui/icons-material/Public'

export const MENU_ENTRIES = [
    { i18nCode: 'common:planets', icon: PublicIcon, linkTo: '/' },
    { i18nCode: 'common:starships', icon: RocketIcon, linkTo: '/starships' },
    {
        i18nCode: 'common:vehicles',
        icon: DirectionsCarIcon,
        linkTo: '/vehicles',
    },
]
