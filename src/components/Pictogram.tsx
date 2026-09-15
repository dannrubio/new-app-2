'use client';
import React, { useState } from 'react';

interface PictogramProps {
    darkened: boolean;
    tabIndex?: number;
}

const Pictogram: React.FC<PictogramProps> = ({ darkened, tabIndex }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <span tabIndex={tabIndex} className={`pictogram ${darkened ? 'darkened' : ''}`}>&nbsp;</span>
    );
}

export default Pictogram;