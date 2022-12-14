import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/storeConfig";


interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
    {title: 'tests', path: '/tests'}
];

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
];

const navStyles = {

    color: 'inherit',
    textDecoration: 'none', 
    typography: 'h6',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
};

const boxStyles = {
    display: 'flex',
    alignItems: 'center'
};

const toolBarStyles = { 
    
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
};

export default function Header({darkMode, toggleDarkMode}: Props) {

    const { basket } = useAppSelector(state => state.basket);
    const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar sx={toolBarStyles}>
                <Box sx={boxStyles}>
                    <Typography variant='h6' component={NavLink} exact to='/' sx={navStyles}>
                        Northern Lights
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={toggleDarkMode}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Box>
                
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem 
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                
                <Box sx={boxStyles}>
                    <IconButton component={Link} to='/basket' size='large' sx={{color: 'inherit'}}>
                        <Badge badgeContent={itemCount} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}