import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Buttons } from './components';
import { Stack } from '@mui/material';
import { SearchPage, TrendsPage, RandomPage, SettingsPage } from './pages';
import { AnimationProvider } from './components/AnimatedBackground/AnimationProvider';
import Slides from './components/AnimatedBackground/Slides/Slides';
import Figures from './components/AnimatedBackground/Figures/Figures';
import { useAnimation } from './components/AnimatedBackground/AnimationProvider';

function App() {
    const { animation } = useAnimation();

    return (
        <div className="main-content">
            <Stack direction="row" spacing={2}>
                <Buttons />
            </Stack>
            {animation === 'slides' && <Slides />}
            {animation === 'figures' && <Figures />}
            <Routes>
                <Route path="/" element={<TrendsPage />} />
                <Route path="/gifs/" element={<TrendsPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/random" element={<RandomPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </div>
    );
}

// export default App;

function AppWithProvider() {
    return (
        <AnimationProvider>
            <App />
        </AnimationProvider>
    );
}

export default AppWithProvider;
