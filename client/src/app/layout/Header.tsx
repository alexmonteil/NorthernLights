import { AppBar, Switch, Toolbar, Typography } from "@mui/material";


interface Props {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export default function Header({darkMode, toggleDarkMode}: Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    Northern Lights
                </Typography>
                <Switch
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Toolbar>
        </AppBar>
    );
}