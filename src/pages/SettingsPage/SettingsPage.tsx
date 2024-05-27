import React from 'react';
import { Stack, Button } from '@mui/material';
import { StyledButton, StyledStack } from './style';
import { useAnimation } from '../../components/AnimatedBackground/AnimationProvider';

const SettingsPage: React.FC = () => {
    const { setAnimation } = useAnimation();

    const handleSlidesClick = () => {
        setAnimation('slides');
    };

    const handleFiguresClick = () => {
        setAnimation('figures');
    };

    return (
        <>
            <Stack sx={StyledStack}>
                <Button sx={StyledButton} onClick={handleSlidesClick}>
                    Slides
                </Button>
                <Button sx={StyledButton} onClick={handleFiguresClick}>
                    Figures
                </Button>
            </Stack>
        </>
    );
};

export default SettingsPage;
