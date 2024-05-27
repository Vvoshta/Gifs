import React, { createContext, useContext, useState, ReactNode } from 'react';

type AnimationState = {
    animation: string;
    setAnimation: React.Dispatch<React.SetStateAction<string>>;
};

const AnimationContext = createContext<AnimationState | undefined>(undefined);

export const useAnimation = () => {
    const context = useContext(AnimationContext);
    if (!context) {
        throw new Error(
            'useAnimation must be used within an AnimationProvider'
        );
    }
    return context;
};

export const AnimationProvider: React.FC<{ children: ReactNode }> = ({
    children
}) => {
    const [animation, setAnimation] = useState('slides');

    return (
        <AnimationContext.Provider value={{ animation, setAnimation }}>
            {children}
        </AnimationContext.Provider>
    );
};
