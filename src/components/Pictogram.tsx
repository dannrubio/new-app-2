'use client';
import React, { useState } from 'react';

interface PictogramProps {
    darkened: boolean;
}

const Pictogram: React.FC<PictogramProps> = ({ darkened }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <span className={`pictogram ${darkened ? 'darkened' : ''}`}>&nbsp;</span>
    );
}

export default Pictogram;