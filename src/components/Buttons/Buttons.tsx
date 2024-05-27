import React from 'react';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { StyledButton, SettingsStyledButton } from './style';

const Buttons: React.FC = () => {
    return (
        <Stack direction="row" spacing={2}>
            <NavLink to="/">
                <Button sx={StyledButton}>Trends</Button>
            </NavLink>
            <NavLink to="/search">
                <Button sx={StyledButton}>Search</Button>
            </NavLink>
            <NavLink to="/random">
                <Button sx={StyledButton}>Random</Button>
            </NavLink>
            <NavLink to="/settings">
                <Button sx={SettingsStyledButton}>Settings</Button>
            </NavLink>
        </Stack>
    );
};

export default Buttons;
